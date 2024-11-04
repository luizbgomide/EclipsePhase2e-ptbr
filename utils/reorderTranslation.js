// reorder content based on paragraphs, table, lists and titles

const fs = require("fs");
const path = require("path");
const readline = require('readline');

const orderTag = "<!--order-->"; // must be on a single line right before the first item, can happen after an end-order
const orderByTag = "<!--order-by-->"; // on table column header: columns to use for ordering
const orderCellsTag = "<!--order-cells-->"; // on table column header: ignore table and sort cell content from selected columns
const orderEndTag = "<!--order-end-->"; // must be on a single line after a blank line
const orderUnionTag = "<!--order-union-->"; // join with the previous item, use on empty line between text and titles. Can be used at the start to skip the fir
const tableColumnRE = /(?<!\\)\|/;

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
        let result = reorderFile(contents);
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

function reorderFile(contents) {
    let lines = contents.split('\n');
    let ordering = false;
    let orderBy = 1;
    let cellCols = [];
    let delimiter = ""; // text: "", list: "-", table: "|", title: "#+ "
    let result = [];
    let unorderedBlocks = [];
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        let line = lines[lineIndex];
        if (line.includes(orderTag)) {
            if (ordering)
                throw new Error(`${lineIndex}: Duplicate ordered tag.`);
            ordering = true;
            result.push(line);
            lineIndex++;
            line = lines[lineIndex];
            delimiter = line?.match(/^(\s*-|\||#+ )/)?.[0] ?? "";
            unorderedBlocks = [];
            if (delimiter === "|") {
                let cols = line.split(tableColumnRE); // index 0 and last should be empty
                cellCols = cols.map((value, index) => value.includes(orderCellsTag) ? index : -1).filter(index => index > 0);
                orderBy = cols.findIndex(value => value.includes(orderByTag));
                if (orderBy >= 0 && cellCols.length > 0) {
                    throw new Error(`${lineIndex}: Cannot use order-by with order-cells.`);
                }
                orderBy = orderBy >= 0 ? orderBy : 1;
                result.push(lines[lineIndex]);
                lineIndex++;
                result.push(lines[lineIndex]);
                lineIndex++;
                line = lines[lineIndex];
            }
        }

        if (ordering) {
            if (line.includes(orderEndTag) || ((delimiter === "|" || delimiter === "-") && line.trim() === "")) {
                // if ordering by title or text, make sure the last line of each block is empty
                if (delimiter === "" || delimiter.startsWith("#")) {
                    unorderedBlocks.forEach(block => {
                        if (block[block.length - 1].trim() !== "")
                            block.push("");
                    });
                }
                if (delimiter === "|") {
                    unorderedBlocks.map(block => block[0] = block[0].split(tableColumnRE));
                    if (cellCols.length > 0) {
                        let cellContent = [];
                        cellCols.forEach(colIndex => cellContent.push(...unorderedBlocks.map(block => block[0][colIndex])));
                        cellContent.sort((a, b) => compare(a, b));
                        cellContent.reverse();
                        cellCols.forEach(colIndex => unorderedBlocks.forEach(block => block[0][colIndex] = cellContent.pop()));
                    } else {
                        unorderedBlocks.sort((a, b) => compare(a[0][orderBy], b[0][orderBy]));
                    }
                    unorderedBlocks.forEach(block => block[0] = block[0].join("|"));
                } else {
                    unorderedBlocks.sort((a, b) => compare(a[0], b[0]));
                }
                let orderedResult = unorderedBlocks.flat();
                result.push(...orderedResult);
                result.push(line);
                ordering = false;
                continue;
            }

            if (line.includes(orderUnionTag)) {
                if (unorderedBlocks.length === 0) {
                    result.push(line);
                    continue;
                }
                unorderedBlocks[unorderedBlocks.length - 1].push(line);
                if (delimiter === "" || delimiter.startsWith("#")) {
                    lineIndex++;
                    unorderedBlocks[unorderedBlocks.length - 1].push(line);
                }
                continue;
            }

            if (line.trim() !== "" && line.startsWith(delimiter)) {
                unorderedBlocks.push([line]);
            } else {
                if (unorderedBlocks.length === 0) {
                    result.push(line);
                    continue;
                }
                unorderedBlocks[unorderedBlocks.length - 1].push(line);
            }
            continue;
        }
        result.push(line);
    }
    if (ordering) {
        throw new Error(`End of file while ordering. The <!--order-end--> tag is mandatory for text and title ordering.`);
    }

    return result;
}

function reorderFiles() {
    try {
        readDirectory(sourceDir);
        console.log(`\n\nProcess complete.\nReordered files written to: "${outputDir}"`);
    } catch (error) {
        console.error(error.message);
    }
}
