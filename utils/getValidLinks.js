const fs = require("fs");
const path = require("path");

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
    var whitespace = /\s/g
    var specialPunctuation = /[\u2000-\u206F\u2E00-\u2E7F!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~‘’“”]/g
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
        let slug = h[2].toLowerCase().trim().replace(specialPunctuation, '').replace(whitespace, '-');
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
var sourceDir = path.posix.normalize(process.argv[2]);
let list = readDirectory(sourceDir);
fs.writeFileSync(outputFile, list);

console.log(`Process complete.\nValid links written to: "${outputFile}"`);
process.exit(0);
