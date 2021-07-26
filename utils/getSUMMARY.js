const fs = require("fs");
const path = require("path");

const summaryFile = "SUMMARY.md";

function readDirectory(dir) {
    let result = "";

    let dirList = fs.readdirSync(dir, { withFileTypes: true }).sort();
    dirList.filter((file) => file.isDirectory()).forEach((file) => {
        result += readDirectory(path.posix.join(dir, file.name));
    });
    if (dir == sourceDir) {
        result += "\n---\n\n";
    }
    dirList.filter((file) => file.isFile()).forEach((file) => {
        result += processFile(path.posix.join(dir, file.name));
    });
    return result;
}

function processFile(file) {
    let filename = path.basename(file);
    if (filename == summaryFile) return "";
    let relative_path = path.posix.relative(sourceDir, file);
    if (path.extname(file) != ".md") {
        return "";
    }
    let contents = fs.readFileSync(path.resolve(file), 'utf8');
    let title = contents.match(/^\# (.+)$/m);
    if (filename.startsWith("00-")) {
        return `- [${title[1]}](${relative_path})\n`;
    }
    if (!/^\d\d\-/.test(filename)) {
        return `[${title[1]}](${relative_path})\n`;
    }
    return `  - [${title[1]}](${relative_path})\n`;
}


if (process.argv.length != 3 || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isDirectory()) {
    console.log("You must inform a valid source directory.");
    process.exit(1);
}
var sourceDir = path.posix.normalize(process.argv[2]);
let list = "# Summary\n\n" + readDirectory(sourceDir);
let targetFile = path.join(sourceDir, summaryFile);
fs.writeFileSync(targetFile, list);

console.log(`Process complete.\nSummary written to: "${targetFile}"`);
process.exit(0);
