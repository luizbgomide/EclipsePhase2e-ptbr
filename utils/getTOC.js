const fs = require("fs");
const path = require("path");
const { getValidAnchor } = require("./helpers");

const tocMarker = "<!-- TOC PLACEHOLDER -->";
const headerRE = /^(\#+)\s+(.+)$/gm;
const blockquoteRE = /\<blockquote.*?\<\/blockquote\>/gs;
const summaryFile = "SUMMARY.md";
const sortByTitleFile = ".sortByTitle"

function readDirectory(dir) {

    let dirList = fs.readdirSync(dir, { withFileTypes: true }).sort();
    let sortByTitle = dirList.find((file) => file.isFile() && file.name === sortByTitleFile);
    let tocFile = dirList.find((file) => file.isFile() && file.name.startsWith("00-") && path.extname(file.name) === ".md");
    let tocFileHeaders = "";
    let result = [];
    let sortedResult = [];
    dirList.forEach((item) => {
        let itemName = item.name;
        let target = (sortByTitle && !/^\d\d-/.test(itemName)) ? sortedResult : result;
        if (item.isDirectory()) {
            target.push(readDirectory(path.posix.join(dir, itemName)));
        }
        if (tocFile && item.isFile() && path.extname(itemName) === ".md" && itemName !== summaryFile) {
            if (item === tocFile) {
                tocFileHeaders = processFile(path.posix.join(dir, itemName));
            } else {
                target.push(processFile(path.posix.join(dir, itemName)));
            }
        }
    });

    sortedResult.sort();
    result.push(...sortedResult);

    if (tocFile) {
        tocFile = path.resolve(path.posix.join(dir, tocFile.name));
        let contents = fs.readFileSync(tocFile, 'utf8');
        let index = contents.indexOf(tocMarker);
        if (index >= 0) {
            contents = contents.substring(0, index + tocMarker.length) + '\n\n';
            process.stdout.write("Writing TOC for: " + tocFile + '\n');
            fs.writeFileSync(tocFile, contents + result.join(""));
        }
    }

    result = result.map(lines => lines.split("\n").map(l => l.length > 0 ? "  " + l : "").join("\n"));

    return tocFileHeaders + result.join("");
}

function processFile(file) {
    let result = '';
    // just process files start with ##-
    // let filename = path.basename(file);
    // if (!/^\d\d\-/.test(filename)) {
    //     return "";
    // }
    contents = fs.readFileSync(path.resolve(file), 'utf8');
    // remove blockquote headers
    contents = contents.replace(blockquoteRE, '');

    let headers = contents.matchAll(headerRE);
    let slugList = []
    for (const h of headers) {
        let level = h[1].length;
        let slug = getValidAnchor(h[2]);
        let indexSuffix = 0;
        while (slugList.includes(slug + (indexSuffix === 0 ? "" : `-${indexSuffix}`))) {
            indexSuffix++;
        }
        let relative_path = path.posix.relative(path.dirname(file), file);
        if (level == 1) {
            result += `${"  ".repeat(level - 1)}- [${h[2]}](${relative_path})\n`;
        }
        else {
            result += `${"  ".repeat(level - 1)}- [${h[2]}](${relative_path}#${slug + (indexSuffix === 0 ? "" : `-${indexSuffix}`)})\n`;
        }
    }
    return result;
}


if (process.argv.length != 3 || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isDirectory()) {
    console.log("You must inform a valid source directory.");
    process.exit(1);
}
var sourceDir = path.posix.normalize(process.argv[2]);
readDirectory(sourceDir);

console.log(`Process complete.\n`);
process.exit(0);
