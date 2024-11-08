// resort content based on paragraphs, table, lists and titles
const fs = require("fs");
const path = require("path");
const readline = require('readline');
const { compareText, stripHtml } = require('./helpers')

// those must be on a single line by themselves surronded by empty lines to prevent issues with MD parsing
const sortTag = "<sort>"; // start sorting
const sortEndTag = "</sort>"; // end sorting, not used with tables or lists that end of the first empty line
const sortBlockTag = "<sort-block>"; // delimits blocks that are joined, trimmed and have all HTML removed for sorting purposes, must be placed before each block

// those should be placed on the table header cells
const sortTableByTag = "<sort-by>"; // on table column header: columns to use for sorting
const sortTableCellsTag = "<sort-cells>"; // on table column header: ignore table and sort cell content from selected columns, incompatible with sort-by, sort-roll and sort-union
const sortTableNumberTagRE = /<sort-n ([nd]\d+)(?: offset=(\d+))?>/; // on table column header: distribute values based of dN (1-N) or d00 (00-99), they aren't affected by restarts
const rollCellRE = /\s*(\d+)(?:[-–](\d+))?\s*/

// those should be placed on the item affected by them
const sortUnionTag = "<sort-union>"; // join with the previous item during sorting
const sortFixedTag = "<sort-fixed>"; // keep this on a fixed position (start a new block if needed)
const sortRestartTag = "<sort-restart>" // on tables and lists end the previous sort and restart a new one
const sortNumberTagRE = /(<sort-n ([nd]\d+)=(\w+)(?: offset=(\d+))?>)(\d+)(?:[-–](\d+))?(<\/sort-n>)/g;
const sortHereTagRE = /.*<sort-here>/; // mark where the line should start for sorting purposes, eg, to skip articles like "the"
const tableColumnRE = /(?<!\\)\|/;
const rollDash = '–';

function readDirectory(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((item) => {
        if (item.isDirectory()) {
            readDirectory(path.join(dir, item.name));
        } else if (item.isFile()) {
            processFile(path.join(dir, item.name));
        } else {
            console.log("Something wrong: {}", item.name);
        }
    });
}

function processFile(file) {
    let target = path.join(outputDir, path.relative(sourceDir, file));
    if (path.extname(file) != ".md") {
        // here we copy everything
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(file, target)
        return;
    }
    let contents = fs.readFileSync(file, 'utf8');
    if (contents.includes(sortTag)) {
        console.log(`> ${file}`)
        let lines = contents.split('\n');
        let result = [];
        while (lines.length > 0) {
            const line = lines.shift();
            result.push(line);
            if (line.trim() === sortTag) {
                result.push(...resortContent(lines));
            }
        }
        contents = result.join('\n');
    }

    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, contents);
}

if (process.argv.length != 3 || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isDirectory()) {
    console.log("You must inform a valid source directory.");
    process.exit(1);
}
var sourceDir = path.resolve(process.argv[2]);
var outputDir = sourceDir + ".sorted";

if (fs.statSync(outputDir, { throwIfNoEntry: false })?.isDirectory()) {
    console.log(`Target directory "${outputDir}" already exists.`);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Overwrite [y/n]? ', (answer) => {
        if (answer == "y") {
            fs.rmdirSync(outputDir, { recursive: true });
            resortFiles();
            process.exit(0)
        }
        else {
            console.log("Exiting...");
            process.exit(1);
        }
    });
}
else {
    resortFiles();
}

function compare(a, b) {
    return compareText(a.replace(sortHereTagRE, ''), b.replace(sortHereTagRE, ''));
}

function resortContent(lines) {
    let result = [];
    let tableByCol = 1;
    let tableNumberCols = new Map();
    let tableCellCols = [];
    let tableFixedCols = [];
    while (lines[0].trim() === "") {
        result.push(lines.shift());
    }
    // text: "", list: "-", table: "|", title: "#+ "
    let delimiter = lines[0].match(/^\s*(-|\||#+ )/)?.[1] ?? "";
    const sortBlockMode = lines[0].trim() === sortBlockTag;
    if (delimiter === "|") {
        let headerLine = lines.shift();
        let cols = headerLine.split(tableColumnRE); // index 0 and last should be empty
        for (const [index, col] of cols.entries()) {
            if (col.includes(sortFixedTag))
                tableFixedCols.push(index);
            if (col.includes(sortTableCellsTag))
                tableCellCols.push(index);
            const numberTagMatch = col.match(sortTableNumberTagRE);
            if (numberTagMatch) {
                const type = numberTagMatch[1];
                const mod = parseInt(type.substring(1));
                const size = mod === 0 ? type.length - 1 : 1;
                const value = (type[0] === "d" ? 1 : 0) + (numberTagMatch[2] ? parseInt(numberTagMatch[2]) : 0);
                const numberSettings = { type, mod, size, value };
                tableNumberCols.set(index, numberSettings);
                console.log(numberSettings)
            }
        }
        tableByCol = cols.findIndex(value => value.includes(sortTableByTag));
        if (tableByCol >= 0 && tableCellCols.length > 0) {
            throw new Error(`Cannot use sort-by with sort-cells.`);
        }
        tableByCol = tableByCol >= 0 ? tableByCol : 1;
        result.push(headerLine);
        headerLine = lines.shift();
        result.push(headerLine);
    }
    let unsortedBlocks = [];
    let currTarget = result;
    let newBlockReady = true;
    let fixedBlockIndexes = [];
    let ended = false;
    let restartTagCol = -1;
    while (lines.length > 0) {
        let line = lines.shift();
        const emptyLine = line.trim() === "";
        if (line.includes(sortEndTag) || line.includes(sortRestartTag) || (emptyLine && (delimiter === "|" || delimiter === "-"))) {
            // if sorting by block, title or text, make sure the last line of each block is empty
            if (delimiter === "" || delimiter.startsWith("#")) {
                unsortedBlocks.forEach(block => {
                    if (block[block.length - 1].trim() !== "")
                        block.push("");
                });
            }
            const fixedBlocks = fixedBlockIndexes.map(blockIndex => unsortedBlocks[blockIndex]);
            unsortedBlocks = unsortedBlocks.filter((_, index) => !fixedBlockIndexes.includes(index));
            if (sortBlockMode) {
                unsortedBlocks = unsortedBlocks.map(lines => lines.join("\n"));
                unsortedBlocks.sort((a, b) => compare(a, b));
            } else if (delimiter === "|") {
                unsortedBlocks = unsortedBlocks.map(block => block.map(row => row.split(tableColumnRE)));
                if (tableCellCols.length > 0) { // sort only cell content
                    let cellContent = [];
                    tableCellCols.forEach(colIndex => cellContent.push(...unsortedBlocks.map(block => block[0][colIndex])));
                    cellContent.sort((a, b) => compare(a, b));
                    cellContent.reverse();
                    tableCellCols.forEach(colIndex => unsortedBlocks.forEach(block => block[0][colIndex] = cellContent.pop()));
                } else { // regular table sort
                    const tempFixedTable = unsortedBlocks.flat().map(row => [...row]);
                    unsortedBlocks.sort((a, b) => compare(a[0][tableByCol], b[0][tableByCol]));
                    for (const colIndex of tableFixedCols) {
                        let index = 0;
                        unsortedBlocks.forEach(block => block.forEach(row => {
                            row[colIndex] = tempFixedTable[index][colIndex];
                            index++;
                        }));
                    }
                }
                unsortedBlocks = unsortedBlocks.map(block => block.map(row => row.join("|")));
            } else { // regular sort, remove delimiter
                unsortedBlocks.sort((a, b) => compare(a[0].substring(a[0].indexOf(delimiter) + delimiter.length), b[0].substring(b[0].indexOf(delimiter + delimiter.length))));
            }
            fixedBlockIndexes.forEach((blockIndex, index) => unsortedBlocks.splice(blockIndex, 0, fixedBlocks[index]));
            // reinsert the restart tag at the col it was found
            if (restartTagCol >= 0) {
                const tempRow = unsortedBlocks[0][0].split("|");
                const originalLength = tempRow[restartTagCol].length;
                tempRow[restartTagCol] = ` ${sortRestartTag}${tempRow[restartTagCol].trim()} `.padEnd(originalLength);
                unsortedBlocks[0][0] = tempRow.join("|");
            }

            let sortedLines = unsortedBlocks.flat();
            if (tableNumberCols.size > 0) {
                let tableRows = sortedLines.map(row => row.split(tableColumnRE));
                for (const [colIndex, numberSettings] of tableNumberCols) {
                    for (const row of tableRows) {
                        const cell = row[colIndex];
                        const rollMatch = stripHtml(cell).match(rollCellRE);
                        if (rollMatch === null)
                            continue;
                        let range = rollMatch[2] ? Number.parseInt(rollMatch[2]) - Number.parseInt(rollMatch[1]) : 0;
                        let startValue = numberSettings.value % (numberSettings.mod === 0 ? 10 ** numberSettings.size : numberSettings.mod);
                        if (startValue === 0 && numberSettings.mod !== 0) {
                            startValue = numberSettings.mod;
                        }
                        const endValue = startValue + range;
                        const newRollValues = startValue.toString().padStart(numberSettings.size, '0')
                            .concat(startValue !== endValue ? rollDash + endValue.toString().padStart(numberSettings.size, '0') : "");
                        row[colIndex] = newRollValues.padStart((cell.length + newRollValues.length) / 2).padEnd(cell.length);
                        numberSettings.value = endValue + 1;
                    }
                }
                sortedLines = tableRows.map(row => row.join("|"));
            }

            // checks for closed number tags in the text
            let numberValues = new Map();
            // TODO redo this as the col type
            sortedLines = sortedLines.map(line => line.replace(sortNumberTagRE, (match, openTag, type, id, offset, start, end, closeTag) => {
                let range = end ? Number.parseInt(end) - Number.parseInt(start) : 0;
                if (range < 0 && type === "d10")
                    range += 10; // n-0 in d10
                if (!numberValues.has(id)) {
                    numberValues.set(id, 0);
                }
                const modValue = type === "d100" ? 100 :
                    type === "d10" ? 10 : Infinity;
                // d10/count starts at 1 and d100 at 0
                const zeroIndex = type !== "d100" ? 1 : 0;
                const offsetValue = parseInt(offset ?? "0");
                const startValue = ((numberValues.get(id) + offsetValue) % modValue) + zeroIndex;
                const endValue = startValue + range;
                const numberWidth = type === "d100" ? 2 : 1;
                const newRollValues = startValue.toString().padStart(numberWidth, '0')
                    .concat(startValue !== endValue ? rollDash + endValue.toString().padStart(numberWidth, '0') : "");
                numberValues.set(id, numberValues.get(id) + 1 + range);
                return `${openTag}${newRollValues}${closeTag}`;
            }));

            result.push(...sortedLines);
            if (!line.includes(sortRestartTag)) {
                result.push(line);
                ended = true;
                break;
            }
            unsortedBlocks = [];
            currTarget = result;
            newBlockReady = true;
            fixedBlockIndexes = [];
            tempRow = line.split("|");
            restartTagCol = tempRow.findIndex(col => col.includes(sortRestartTag));
            const originalLength = tempRow[restartTagCol].length
            tempRow[restartTagCol] = tempRow[restartTagCol].replace(sortRestartTag, '').padEnd(originalLength);
            line = tempRow.join("|");
        }
        if (emptyLine) {
            currTarget.push(line);
            newBlockReady = !sortBlockMode;
            continue;
        }
        if (line.trim() === sortTag) { // sort tag should always be on single line surronded by empty lines
            currTarget.push(line);
            currTarget.push(...resortContent(lines));
            continue;
        }
        if (sortBlockMode && line.trim() === sortBlockTag) {
            newBlockReady = true;
        }
        if (line.includes(sortFixedTag)) {
            fixedBlockIndexes.push(unsortedBlocks.length);
            newBlockReady = true;
        }
        if (line.includes(sortUnionTag)) {
            currTarget.push(line);
            // if on a single line, add the following content too
            if (line.trim() === sortUnionTag) {
                while (lines[0].trim() === "") {
                    currTarget.push(lines.shift());
                }
            }
            newBlockReady = delimiter === "|" || delimiter === "-";
            continue;
        }
        if (newBlockReady && line.trimStart().startsWith(delimiter)) {
            unsortedBlocks.push([]);
            currTarget = unsortedBlocks[unsortedBlocks.length - 1];
            newBlockReady = delimiter !== "";
        }
        currTarget.push(line);
    }
    if (!ended) {
        throw new Error(`End of file while sorting. Text, title and block must end with </sort>, lists and tables with empty line.`);
    }
    return result;
}

function resortFiles() {
    readDirectory(sourceDir);
    console.log(`\n\nProcess complete.\nResorted files written to: "${outputDir}"`);
}
