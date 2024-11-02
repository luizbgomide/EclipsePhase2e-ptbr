// reorder content based on paragraphs, table, lists and titles

const fs = require("fs");
const path = require("path");
const readline = require('readline');


// div and blockquotes messes up with crowdin format
// wbr forces crowdin to rebuild the MD tables as HTML tables
const sortedTag = "<!--sorted-->";
const endsortTag = "<!--end-sort-->";
const ignoresortTag = "<!--ignore-sort-->";

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
    let sorting = false;
    let sortDelimiter = ""; // text: "", list: "-", table: "|", title: "#+ "
    let result = [];
    let unsortedBlocks = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.indexOf(sortedTag) >= 0) {
            if (sorting)
                throw new Error(`Duplicate sorted tag. File: ${file} -  Line: ${i}`);
            result.push(line);
            i++;
            line = lines[i];
            sortDelimiter = line?.match(/^(\s*-|\||#+ )/)?.[0] ?? "";
            sorting = true;
            unsortedBlocks = [];
            if (sortDelimiter === "|") {
                result.push(lines[i]);
                i++
                result.push(lines[i]);
                i++;
                line = lines[i];
            }
        }
        if (sorting) {
            if (line.indexOf(endsortTag) >= 0) {
                // if sorting title or text, make sure the last line is empty
                if (sortDelimiter === "" || sortDelimiter.startsWith("#")) {
                    unsortedBlocks.forEach(block => {
                        if (block[block.length - 1].trim() !== "")
                            block.push("\r")
                    });
                }

                unsortedBlocks.sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true, sensitivity: "base" }));
                if (sortDelimiter === "|" || sortDelimiter === "-") {
                    unsortedBlocks = unsortedBlocks.filter(block => block[0].trim !== "");
                    unsortedBlocks.push([""]);
                }
                result.push(...unsortedBlocks.flat());
                result.push(line);
                sorting = false;
                continue;
            }

            if (line.indexOf(ignoresortTag) >= 0) {
                unsortedBlocks[unsortedBlocks.length - 1].push(line);
                i++;
                unsortedBlocks[unsortedBlocks.length - 1].push(line);
                continue;
            }

            if (line.trim() !== "" && line.startsWith(sortDelimiter)) {
                unsortedBlocks.push([line]);
            } else {
                unsortedBlocks[unsortedBlocks.length - 1].push(line);
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
