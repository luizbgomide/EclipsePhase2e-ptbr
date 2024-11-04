// reorder content based on paragraphs, table, lists and titles

const fs = require("fs");
const path = require("path");
const { constrainedMemory } = require("process");
const readline = require('readline');

const orderTag = "<!--order-->"; // must be on a single line right before the first item, can happen after an end-order
const orderByTag = "<!--order-by-->"; // on table column header: columns to use for ordering
const orderRollTag = "<!--order-roll-->"; // on table column header: columns to use for ordering
const orderCellsTag = "<!--order-cells-->"; // on table column header: ignore table and sort cell content from selected columns
const orderEndTag = "<!--order-end-->"; // must be on a single line after a blank line
const orderUnionTag = "<!--order-union-->"; // join with the previous item during ordering
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
    if (contents.includes(orderTag)) {
        console.log(`> ${file}`)
        let reversedLines = contents.split('\n').reverse();
        let result = [];
        while (reversedLines.length > 0) {
            const line = reversedLines.pop();
            result.push(line);
            if (line.includes(orderTag)) {
                result.push(...reorderContent(reversedLines));
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
var outputDir = sourceDir + ".ordered";

if (fs.statSync(outputDir, { throwIfNoEntry: false })?.isDirectory()) {
    console.log(`Target directory "${outputDir}" already exists.`);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Overwrite [y/n]? ', (answer) => {
        if (answer == "y") {
            fs.rmdirSync(outputDir, { recursive: true });
            reorderFiles();
            process.exit(0)
        }
        else {
            console.log("Exiting...");
            process.exit(1);
        }
    });
}
else {
    reorderFiles();
}

function compare(a, b) {
    const compareOptions = { numeric: true, sensitivity: "base" };
    const specialPunctuation = /[\u2000-\u206F\u2E00-\u2E7F!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~‘’“”]/g
    return a.replace(specialPunctuation, " ").trimStart().localeCompare(b.replace(specialPunctuation, " ").trimStart(), undefined, compareOptions);
}

function reorderContent(reversedLines) {
    let result = [];
    let colBy = 1;
    let colRoll = -1;
    let cellCols = [];
    // text: "", list: "-", table: "|", title: "#+ "
    let delimiter = reversedLines.at(-1)?.match(/^\s*(-|\||#+ )/)?.[0] ?? "";
    if (delimiter === "|") {
        let headerLine = reversedLines.pop();
        let cols = headerLine.split(tableColumnRE); // index 0 and last should be empty
        cellCols = cols.map((value, index) => value.includes(orderCellsTag) ? index : -1).filter(index => index > 0);
        colBy = cols.findIndex(value => value.includes(orderByTag));
        colRoll = cols.findIndex(value => value.includes(orderRollTag));
        if (colBy >= 0 && cellCols.length > 0) {
            throw new Error(`Cannot use order-by with order-cells.`);
        }
        colBy = colBy >= 0 ? colBy : 1;
        result.push(headerLine);
        headerLine = reversedLines.pop();
        result.push(headerLine);
    }
    let unorderedBlocks = [];
    let currTarget = result;
    let newBlockReady = true;
    while (reversedLines.length > 0) {
        const line = reversedLines.pop();
        const emptyLine = line.trim() === "";
        if (line.includes(orderEndTag) || (emptyLine && (delimiter === "|" || delimiter === "-"))) {
            // if ordering by title or text, make sure the last line of each block is empty
            if (delimiter === "" || delimiter.startsWith("#")) {
                unorderedBlocks.forEach(block => {
                    if (block[block.length - 1].trim() !== "")
                        block.push("");
                });
            }
            if (delimiter === "|") {
                unorderedBlocks = unorderedBlocks.map(block => block.map(row => row.split(tableColumnRE)));
                let currRollValue = Number.parseInt(unorderedBlocks[0][0][colRoll]?.trim().split(rollDash)[0]);
                const rollColWidth = unorderedBlocks[0][0][colRoll]?.length;
                if (cellCols.length > 0) {
                    let cellContent = [];
                    cellCols.forEach(colIndex => cellContent.push(...unorderedBlocks.map(block => block[0][colIndex])));
                    cellContent.sort((a, b) => compare(a, b));
                    cellContent.reverse();
                    cellCols.forEach(colIndex => unorderedBlocks.forEach(block => block[0][colIndex] = cellContent.pop()));
                } else {
                    unorderedBlocks.sort((a, b) => compare(a[0][colBy], b[0][colBy]));
                }
                const orderedRows = unorderedBlocks.flat();
                if (colRoll >= 0) {
                    orderedRows.forEach(row => {
                        const values = row[colRoll].trim().split(rollDash).map(v => Number.parseInt(v));
                        const extraRange = values.length > 1 ? values[1] - values[0] : 0;
                        const newRollCellValues = ` ${currRollValue}${extraRange > 0 ? `${rollDash}${currRollValue + extraRange}` : ""} `;
                        // I'm assuming the cell content is centered
                        row[colRoll] = " ".repeat((rollColWidth - newRollCellValues.length) / 2).concat(newRollCellValues).padEnd(rollColWidth);
                        currRollValue += extraRange + 1;
                    });
                };
                result.push(...orderedRows.map(row => row.join("|")));
            } else {
                unorderedBlocks.sort((a, b) => compare(a[0], b[0]));
                const orderedLines = unorderedBlocks.flat();
                result.push(...orderedLines);
            }
            result.push(line);
            break;
        }
        if (emptyLine) {
            currTarget.push(line);
            newBlockReady = true;
            continue;
        }
        if (line.includes(orderTag)) {
            currTarget.push(line);
            currTarget.push(...reorderContent(reversedLines));
            continue;
        }
        if (line.includes(orderUnionTag)) {
            currTarget.push(line);
            newBlockReady = false;
            continue;
        }
        if (newBlockReady && line.startsWith(delimiter)) {
            unorderedBlocks.push([line]);
            currTarget = unorderedBlocks[unorderedBlocks.length - 1];
            newBlockReady = delimiter === "|" || delimiter === "-";
            continue;
        }
        currTarget.push(line);
    }
    if (result.length === 0) {
        throw new Error(`End of file while ordering. The <!--order-end--> tag is mandatory for text and title ordering.`);
    }
    return result;
}

function reorderFiles() {
    readDirectory(sourceDir);
    console.log(`\n\nProcess complete.\nReordered files written to: "${outputDir}"`);
}
