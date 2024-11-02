// reorder content based on paragraphs, table, lists and titles

const fs = require("fs");
const path = require("path");
const readline = require('readline');


// div and blockquotes messes up with crowdin format
// wbr forces crowdin to rebuild the MD tables as HTML tables
const startOrderTag = "<!--start-order-->";
const endOrderTag = "<!--end-order-->";
const skipOrderTag = "<!--skip-order-->";

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
    process.stdout.write("\n");
}

function processFile(file) {
    let target = path.join(outputDir, path.relative(sourceDir, file));
    if (path.extname(file) != ".md") {
        // here we copy everything
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(file, target)
        process.stdout.write("-");
        return;
    }
    let contents = fs.readFileSync(file, 'utf8');

    let lines = contents.split('\n');
    let ordering = false;
    let delimiter = ""; // text: "", list: "-", table: "|", title: "#+ "
    let result = [];
    let unorderedBlocks = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.indexOf(startOrderTag) >= 0) {
            if (ordering)
                throw new Error(`Duplicate ordered tag. File: ${file} -  Line: ${i}`);
            result.push(line);
            i++;
            line = lines[i];
            delimiter = line?.match(/^(\s*-|\||#+ )/)?.[0] ?? "";
            ordering = true;
            unorderedBlocks = [];
            if (delimiter === "|") {
                result.push(lines[i]);
                i++
                result.push(lines[i]);
                i++;
                line = lines[i];
            }
        }
        if (ordering) {
            if (line.indexOf(endOrderTag) >= 0) {
                // if ordering by title or text, make sure the last line of each block is empty
                if (delimiter === "" || delimiter.startsWith("#")) {
                    unorderedBlocks.forEach(block => {
                        if (block[block.length - 1].trim() !== "")
                            block.push("")
                    });
                }

                unorderedBlocks.sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true, sensitivity: "base" }));
                let orderedResult = unorderedBlocks.flat();
                if (delimiter === "|" || delimiter === "-") {
                    orderedResult = orderedResult.filter(line => line.trim() !== "");
                    orderedResult.push("");
                }
                result.push(...orderedResult);
                result.push(line);
                ordering = false;
                continue;
            }

            if (line.indexOf(skipOrderTag) >= 0) {
                unorderedBlocks[unorderedBlocks.length - 1].push(line);
                i++;
                unorderedBlocks[unorderedBlocks.length - 1].push(line);
                continue;
            }

            if (line.trim() !== "" && line.startsWith(delimiter)) {
                unorderedBlocks.push([line]);
            } else {
                unorderedBlocks[unorderedBlocks.length - 1].push(line);
            }
            continue;
        }
        result.push(line);
    }

    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, result.join('\n'));
    process.stdout.write(".");
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
            cleanHTML();
            process.exit(0)
        }
        else {
            console.log("Exiting...");
            process.exit(1);
        }
    });
}
else {
    cleanHTML();
}

function cleanHTML() {
    readDirectory(sourceDir);
    console.log(`\n\nProcess complete.\nHTML-clean files written to: "${outputDir}"`);
}
