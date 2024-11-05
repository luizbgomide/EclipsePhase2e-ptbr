// resort content based on paragraphs, table, lists and titles

const fs = require("fs");
const path = require("path");
const { constrainedMemory } = require("process");
const readline = require('readline');

const sortTag = "<!--sort-->"; // must be on a single line right before the first item
const sortByTag = "<!--sort-by-->"; // on table column header: columns to use for sorting
const sortRollTag = "<!--sort-roll-->"; // on table column header: columns to use for sorting
const sortCellsTag = "<!--sort-cells-->"; // on table column header: ignore table and sort cell content from selected columns
const sortEndTag = "<!--sort-end-->"; // must be on a single line after a blank line
const sortUnionTag = "<!--sort-union-->"; // join with the previous item during sorting
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
        let reversedLines = contents.split('\n').reverse();
        let result = [];
        while (reversedLines.length > 0) {
            const line = reversedLines.pop();
            result.push(line);
            if (line.includes(sortTag)) {
                result.push(...resortContent(reversedLines));
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
    const compareOptions = { numeric: true, sensitivity: "base" };
    const specialPunctuation = /[\u2000-\u206F\u2E00-\u2E7F!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~‘’“”]/g
    return a.replace(specialPunctuation, " ").trimStart().localeCompare(b.replace(specialPunctuation, " ").trimStart(), undefined, compareOptions);
}

function resortContent(reversedLines) {
    let result = [];
    let colBy = 1;
    let colRoll = -1;
    let cellCols = [];
    // text: "", list: "-", table: "|", title: "#+ "
    let delimiter = reversedLines.at(-1)?.match(/^\s*(-|\||#+ )/)?.[0] ?? "";
    if (delimiter === "|") {
        let headerLine = reversedLines.pop();
        let cols = headerLine.split(tableColumnRE); // index 0 and last should be empty
        cellCols = cols.map((value, index) => value.includes(sortCellsTag) ? index : -1).filter(index => index > 0);
        colBy = cols.findIndex(value => value.includes(sortByTag));
        colRoll = cols.findIndex(value => value.includes(sortRollTag));
        if (colBy >= 0 && cellCols.length > 0) {
            throw new Error(`Cannot use sort-by with sort-cells.`);
        }
        colBy = colBy >= 0 ? colBy : 1;
        result.push(headerLine);
        headerLine = reversedLines.pop();
        result.push(headerLine);
    }
    let unsortedBlocks = [];
    let currTarget = result;
    let newBlockReady = true;
    while (reversedLines.length > 0) {
        const line = reversedLines.pop();
        const emptyLine = line.trim() === "";
        if (line.includes(sortEndTag) || (emptyLine && (delimiter === "|" || delimiter === "-"))) {
            // if sorting by title or text, make sure the last line of each block is empty
            if (delimiter === "" || delimiter.startsWith("#")) {
                unsortedBlocks.forEach(block => {
                    if (block[block.length - 1].trim() !== "")
                        block.push("");
                });
            }
            if (delimiter === "|") {
                unsortedBlocks = unsortedBlocks.map(block => block.map(row => row.split(tableColumnRE)));
                let currRollValue = Number.parseInt(unsortedBlocks[0][0][colRoll]?.trim().split(rollDash)[0]);
                const rollColWidth = unsortedBlocks[0][0][colRoll]?.length;
                if (cellCols.length > 0) {
                    let cellContent = [];
                    cellCols.forEach(colIndex => cellContent.push(...unsortedBlocks.map(block => block[0][colIndex])));
                    cellContent.sort((a, b) => compare(a, b));
                    cellContent.reverse();
                    cellCols.forEach(colIndex => unsortedBlocks.forEach(block => block[0][colIndex] = cellContent.pop()));
                } else {
                    unsortedBlocks.sort((a, b) => compare(a[0][colBy], b[0][colBy]));
                }
                const sortedRows = unsortedBlocks.flat();
                if (colRoll >= 0) {
                    sortedRows.forEach(row => {
                        const values = row[colRoll].trim().split(rollDash).map(v => Number.parseInt(v));
                        const extraRange = values.length > 1 ? values[1] - values[0] : 0;
                        const newRollCellValues = ` ${currRollValue}${extraRange > 0 ? `${rollDash}${currRollValue + extraRange}` : ""} `;
                        // I'm assuming the cell content is centered
                        row[colRoll] = " ".repeat((rollColWidth - newRollCellValues.length) / 2).concat(newRollCellValues).padEnd(rollColWidth);
                        currRollValue += extraRange + 1;
                    });
                };
                result.push(...sortedRows.map(row => row.join("|")));
            } else {
                unsortedBlocks.sort((a, b) => compare(a[0], b[0]));
                const sortedLines = unsortedBlocks.flat();
                result.push(...sortedLines);
            }
            result.push(line);
            break;
        }
        if (emptyLine) {
            currTarget.push(line);
            newBlockReady = true;
            continue;
        }
        if (line.includes(sortTag)) {
            currTarget.push(line);
            currTarget.push(...resortContent(reversedLines));
            continue;
        }
        if (line.includes(sortUnionTag)) {
            currTarget.push(line);
            newBlockReady = false;
            continue;
        }
        if (newBlockReady && line.startsWith(delimiter)) {
            unsortedBlocks.push([line]);
            currTarget = unsortedBlocks[unsortedBlocks.length - 1];
            newBlockReady = delimiter === "|" || delimiter === "-";
            continue;
        }
        currTarget.push(line);
    }
    if (result.length === 0) {
        throw new Error(`End of file while sorting. The <!--sort-end--> tag is mandatory for text and title sorting.`);
    }
    return result;
}

function resortFiles() {
    readDirectory(sourceDir);
    console.log(`\n\nProcess complete.\nResorted files written to: "${outputDir}"`);
}
