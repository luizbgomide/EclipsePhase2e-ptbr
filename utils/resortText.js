// resort content based on paragraphs, table, lists and titles
const fs = require("fs");
const path = require("path");
const readline = require('readline');
const { compareText, stripHtml } = require('./helpers')

const sortTag = "<!--sort-->"; // must be on a single line right before the first item
const sortBlockTag = "<!--sort-block-->"; // delimits blocks that are trimmed and have all HTML removed for sorting purposes, must be placed before each block
const sortTableByTag = "<!--sort-by-->"; // on table column header: columns to use for sorting
const sortTableNumberTagRE = /<!--sort-(d10|d100|count)(?:\+(\d+))?-->/; // on table column header: distribute values based of d10 (1-0) or d100 (00-99), they aren't affected by restarts
const sortTableCellsTag = "<!--sort-cells-->"; // on table column header: ignore table and sort cell content from selected columns, incompatible with sort-by, sort-roll and sort-union
const sortEndTag = "<!--sort-end-->"; // must be on a single line after a blank line
const sortUnionTag = "<!--sort-union-->"; // join with the previous item during sorting
const sortFixedTag = "<!--sort-fixed-->"; // on tables and lists those rows have keep a fixed positon
const sortRestartTag = "<!--sort-restart-->" // on tables and lists end the previous sort and restart a new one
const sortNumberTagRE = /(<!--sort-(d10|d100|count)(?:\+(\d+))?-(\w+)-->)(\d+)(?:[-–](\d+))?<!--\/-->/g;
const sortSkipTagRE = /<!--sort-skip-->.*?<!--\/-->/g; // use <!--sort-skip-->...<!--\/--> to ignore parts of text
const tableColumnRE = /(?<!\\)\|/;
const rollDash = '–';
const rollCellRE = /\s*(\d+)(?:[-–](\d+))?\s*/

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
            if (line.includes(sortTag)) {
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
    return compareText(a.replace(sortSkipTagRE, ''), b.replace(sortSkipTagRE, ''));
}

function resortContent(lines) {
    let result = [];
    let tableByCol = 1;
    let tableNumberCols = new Map();
    let tableCells = [];
    // text: "", list: "-", table: "|", title: "#+ "
    let delimiter = lines[0].match(/^\s*(-|\||#+ )/)?.[1] ?? "";
    const sortBlockMode = lines[0].includes(sortBlockTag);
    if (delimiter === "|") {
        let headerLine = lines.shift();
        let cols = headerLine.split(tableColumnRE); // index 0 and last should be empty
        for (const [index, col] of cols.entries()) {
            if (col.includes(sortTableCellsTag))
                tableCells.push(index);
            const numberTagMatch = col.match(sortTableNumberTagRE);
            if (numberTagMatch) {
                const countSettings = { type: numberTagMatch[1], value: 1 };
                if (numberTagMatch[2]) {
                    countSettings.value += parseInt(numberTagMatch[2]);
                }
                tableNumberCols.set(index, countSettings);
            }
        }
        tableByCol = cols.findIndex(value => value.includes(sortTableByTag));
        if (tableByCol >= 0 && tableCells.length > 0) {
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
    while (lines.length > 0) {
        const line = lines.shift();
        const emptyLine = line.trim() === "";
        if (line.includes(sortEndTag) || line.includes(sortRestartTag) || (emptyLine && (delimiter === "|" || delimiter === "-"))) {
            // if sorting by title or text, make sure the last line of each block is empty
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
                if (tableCells.length > 0) { // sort only cell content
                    let cellContent = [];
                    tableCells.forEach(colIndex => cellContent.push(...unsortedBlocks.map(block => block[0][colIndex])));
                    cellContent.sort((a, b) => compare(a, b));
                    cellContent.reverse();
                    tableCells.forEach(colIndex => unsortedBlocks.forEach(block => block[0][colIndex] = cellContent.pop()));
                } else { // regular table sort
                    unsortedBlocks.sort((a, b) => compare(a[0][tableByCol], b[0][tableByCol]));
                }
                unsortedBlocks = unsortedBlocks.map(block => block.map(row => row.join("|")));
            } else {
                unsortedBlocks.sort((a, b) => compare(a[0], b[0]));
            }
            fixedBlockIndexes.forEach((blockIndex, index) => unsortedBlocks.splice(blockIndex, 0, fixedBlocks[index]));
            let sortedLines = unsortedBlocks.flat();

            if (tableNumberCols.size > 0) {
                let tableRows = sortedLines.map(row => row.split(tableColumnRE));
                for (const [colIndex, countSettings] of tableNumberCols) {
                    for (const row of tableRows) {
                        const cell = row[colIndex];
                        const rollMatch = stripHtml(cell).match(rollCellRE);
                        if (rollMatch === null)
                            continue;
                        let range = rollMatch[2] ? Number.parseInt(rollMatch[2]) - Number.parseInt(rollMatch[1]) : 0;
                        if (range < 0 && countSettings.type === "d10")
                            range += 10; // n-0 in d10

                        const modValue = countSettings.type === "d100" ? 100 :
                            countSettings.type === "d10" ? 10 : Infinity;
                        const offset = countSettings.type === "d100" ? -1 : 0
                        const startValue = (countSettings.value + offset) % modValue;
                        const endValue = (startValue + range) % modValue;
                        const numberWidth = countSettings.type === "d100" ? 2 : 1;
                        const newRollValues = startValue.toString().padStart(numberWidth, '0')
                            .concat(startValue !== endValue ? rollDash + endValue.toString().padStart(numberWidth, '0') : "");
                        row[colIndex] = newRollValues.padStart((cell.length + newRollValues.length) / 2).padEnd(cell.length);
                        countSettings.value += 1 + range;
                    }
                }
                sortedLines = tableRows.map(row => row.join("|"));
            }

            // checks for closed number tags in the text
            let numberValues = new Map();
            sortedLines = sortedLines.map(line => line.replace(sortNumberTagRE, (match, openTag, type, bonus, id, start, end) => {
                let range = end ? Number.parseInt(end) - Number.parseInt(start) : 0;
                if (range < 0 && type === "d10")
                    range += 10; // n-0 in d10
                if (!numberValues.has(id)) {
                    numberValues.set(id, 1);
                }
                const modValue = type === "d100" ? 100 :
                    type === "d10" ? 10 : Infinity;
                const offset = (type === "d100" ? -1 : 0) + parseInt(bonus ?? "0");
                const startValue = (numberValues.get(id) + offset) % modValue;
                const endValue = (startValue + range) % modValue;
                const numberWidth = type === "d100" ? 2 : 1;
                const newRollValues = startValue.toString().padStart(numberWidth, '0')
                    .concat(startValue !== endValue ? rollDash + endValue.toString().padStart(numberWidth, '0') : "");
                numberValues.set(id, numberValues.get(id) + 1 + range);
                return `${openTag}${newRollValues}<!--/-->`;
            }));

            result.push(...sortedLines);
            if (!line.includes(sortRestartTag)) {
                result.push(line);
                break;
            }
            unsortedBlocks = [];
            currTarget = result;
            newBlockReady = true;
            fixedBlockIndexes = [];
        }
        if (emptyLine) {
            currTarget.push(line);
            newBlockReady = !sortBlockMode;
            continue;
        }
        if (line.trim() === sortTag) { // sort tag should always be on single line before the content
            currTarget.push(line);
            currTarget.push(...resortContent(lines));
            continue;
        }
        if (sortBlockMode && line.includes(sortBlockTag)) {
            newBlockReady = true;
        }
        if (line.includes(sortFixedTag)) {
            fixedBlockIndexes.push(unsortedBlocks.length);
            newBlockReady = true;
        }
        if (line.includes(sortUnionTag)) {
            currTarget.push(line);
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
    if (result.length === 0) {
        throw new Error(`End of file while sorting. The <!--sort-end--> tag is mandatory for text, title and block sorting.`);
    }
    return result;
}

function resortFiles() {
    readDirectory(sourceDir);
    console.log(`\n\nProcess complete.\nResorted files written to: "${outputDir}"`);
}
