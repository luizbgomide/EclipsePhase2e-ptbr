const fs = require("fs");
const path = require("path");
const { getValidAnchor } = require("./helpers");

const outputFile = "valid-links.txt";

const headerRE = /^(\#+)\s+(.+)$/gm;

function readDirectory(dir) {
    let result = '';
    fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
        if (file.isDirectory()) {
            result += readDirectory(path.posix.join(dir, file.name));
        } else if (file.isFile()) {
            result += processFile(path.posix.join(dir, file.name));
        } else {
            console.log("Something wrong: {}", file.name);
        }
    });
    return result;
}

function processFile(file) {
    let result = '';
    let relative_path = path.posix.relative(sourceDir, file);
    if (path.extname(file) != ".md") {
        return `${relative_path}\n`;
    }
    contents = fs.readFileSync(path.resolve(file), 'utf8');

    let headers = contents.matchAll(headerRE);
    let slugList = []
    for (const h of headers) {
        let level = h[1].length;
        let slug = getValidAnchor(h[2]);
        let indexSuffix = 0;
        while (slugList.includes(slug + (indexSuffix === 0 ? "" : `-${indexSuffix}`))) {
            indexSuffix++;
        }
        slug += (indexSuffix === 0 ? "" : `-${indexSuffix}`);
        slugList.push(slug);
        if (level == 1) {
            result += `${relative_path}\n`;
        }
        result += `${relative_path}#${slug}\n`;
    }
    return result;
}


if (process.argv.length != 3 || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isDirectory()) {
    console.log("You must inform a valid source directory.");
    process.exit(1);
}
const sourceDir = path.posix.normalize(process.argv[2]);
const targetFile = path.join(sourceDir, "..", outputFile);
const list = readDirectory(sourceDir);
fs.writeFileSync(targetFile, list);

console.log(`Process complete.\nValid links written to: "${targetFile}"`);
process.exit(0);
