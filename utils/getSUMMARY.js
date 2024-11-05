const fs = require("fs");
const path = require("path");

const summaryFile = "SUMMARY.md";

function readDirectory(root, depth = -1) {
    let result = "";

    let dirContents = fs.readdirSync(root, { withFileTypes: true }).sort();
    let dirList = dirContents.filter((file) => file.isDirectory());
    let fileList = dirContents.filter((file) => file.isFile() && path.extname(file.name) == ".md" && file.name != summaryFile);
    let titleFile = fileList.find((file) => file.name.startsWith("00-"));

    if (titleFile) {
        fileList = fileList.filter((file) => file != titleFile);
        result += processFile(path.posix.join(root, titleFile.name), depth);
    }

    let extraResult = "";

    dirList.forEach((dir) => {
        let dirName = dir.name;
        if (root == sourceDir && !/^\d+/.test(dirName)) {
            extraResult += readDirectory(path.posix.join(root, dirName), -1);
        } else {
            result += readDirectory(path.posix.join(root, dirName), depth + 1);
        };
    });

    fileList.forEach((file) => {
        result += processFile(path.posix.join(root, file.name), depth + 1);
    });

    return result + extraResult;
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
    let filename = path.basename(file);
    let relative_path = path.posix.relative(sourceDir, file);
    let title = getMDTitle(file);
    if (title == "") return "";

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
let list = "# Summary\n\n" + readDirectory(sourceDir);
let targetFile = path.join(sourceDir, summaryFile);
fs.writeFileSync(targetFile, list);

console.log(`Process complete.\nSummary written to: "${targetFile}"`);
process.exit(0);

