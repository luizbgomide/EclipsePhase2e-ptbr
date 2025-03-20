const fs = require("fs");
const path = require("path");

const summaryFile = "SUMMARY.md";
const sortByTitleFile = ".sortByTitle"

function readDirectory(root, depth = -1) {
    let result = [];

    let dirContents = fs.readdirSync(root, { withFileTypes: true }).sort();

    let titleFile = dirContents.find((file) => file.name.startsWith("00-") && file.isFile() && path.extname(file.name) === ".md");
    if (titleFile) {
        dirContents = dirContents.filter((file) => file != titleFile);
        result.push(processFile(path.posix.join(root, titleFile.name), depth));
    }

    let sortByTitle = dirContents.find((file) => file.isFile() && file.name === sortByTitleFile);
    let sortedResult = [];

    let prefixResult = [];
    let extraResult = [];

    dirContents.forEach((item) => {
        let itemName = item.name;
        let target = (sortByTitle && !/^\d\d-/.test(itemName)) ? sortedResult : result;
        if (item.isDirectory()) {
            if (root === sourceDir && !/^\d\d/.test(itemName)) {
                extraResult.push(readDirectory(path.posix.join(root, itemName), -1));
            } else {
                target.push(readDirectory(path.posix.join(root, itemName), depth + 1));
            }
        }
        if (item.isFile() && path.extname(itemName) === ".md" && itemName != summaryFile) {
            if (root === sourceDir && /^-/.test(itemName)) {
                prefixResult.push(processFile(path.posix.join(root, itemName), undefined));
            } else {
                target.push(processFile(path.posix.join(root, itemName), depth + 1));
            }
        }
    });
    sortedResult.sort();
    return prefixResult.concat(result, sortedResult, extraResult).join("");
}

function getMDTitle(file) {
    if (path.extname(file) != ".md") {
        return "";
    }
    let contents = fs.readFileSync(path.resolve(file), 'utf8');
    let title = contents.match(/^\# (.+)$/m);
    if (title && title.length > 0) {
        return title[1] ?? "";
    }
    return "";
}

function processFile(file, depth) {
    let relative_path = path.posix.relative(sourceDir, file);
    let title = getMDTitle(file);
    if (title == "") return "";

    if (depth === undefined) {
        return `[${title}](${relative_path})\n\n`;
    }

    if (depth < 0) {
        return `\n# ${title}\n\n`
    }

    return "  ".repeat(depth) + `- [${title}](${relative_path})\n`;
}




if (process.argv.length != 3 || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isDirectory()) {
    console.log("You must inform a valid source directory.");
    process.exit(1);
}
const sourceDir = path.posix.normalize(process.argv[2]);
const list = "# Summary\n\n" + readDirectory(sourceDir);
const targetFile = path.join(sourceDir, summaryFile);
fs.writeFileSync(targetFile, list);

console.log(`Process complete.\nSummary written to: "${targetFile}"`);
process.exit(0);

