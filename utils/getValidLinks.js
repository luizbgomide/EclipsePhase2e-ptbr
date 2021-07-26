const fs = require("fs");
const path = require("path");

const srcFolder = "src";
const outputFile = "valid-links.txt";

const headerRE = /^(\#+)\s+(.+)$/gm;

const blockquoteRE = /\<blockquote.*?\<\/blockquote\>/gs;

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
    var specials = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g
    let result = '';
    let relative_path = path.posix.relative(fakeOrigin, file);
    if (path.extname(file) != ".md") {
        return `${relative_path}\n`;
    }
    contents = fs.readFileSync(path.resolve(file), 'utf8');
    // contents = contents.replace(blockquoteRE, '');
    let headers = contents.matchAll(headerRE);
    for (const h of headers) {
        let level = h[1].length;
        let slug = h[2].toLowerCase().trim().replace(specials, '').replace(whitespace, '-');
        if (level == 1) {
            // if (file.startsWith("00-")) {
            //     result += `- [${h[2]}](${relative_path})\n`;
            // }
            //result += `${level}- [${h[2]}](${relative_path})\n`;
            result += `${relative_path}\n`;
        }
        else {
            //result += `${level}- [${h[2]}](${relative_path}#${slug})\n`;
            result += `${relative_path}#${slug}\n`;
        }
    }
    return result;
}


if (process.argv.length != 3 || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isDirectory()) {
    console.log("You must inform a valid source directory.");
    process.exit(1);
}
var sourceDir = path.posix.normalize(process.argv[2]);
var fakeOrigin = path.posix.join(sourceDir, "00FAKEDIR/");
let list = readDirectory(sourceDir);
fs.writeFileSync(outputFile, list);

console.log(`Process complete.\nValid links written to: "${outputFile}"`);
process.exit(0);
