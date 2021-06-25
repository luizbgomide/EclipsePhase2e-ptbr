const fs = require("fs");
const path = require("path");

const srcFolder = "src";
const outputFile = "section-headers.md";

const headerRE = /^(\#+)\s+(.+)$/gm;

const blockquoteRE = /\<blockquote.*?\<\/blockquote\>/gs;

function readDirectory(dir) {
    let result = "";

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
    // just process files start with ##-
    let filename = path.basename(file);
    if (!/^\d\d\-/.test(filename)) {
        return "";
    }
    contents = fs.readFileSync(path.resolve(file), 'utf8');
    // remove blockquote headers
    contents = contents.replace(blockquoteRE, '');
    // just get the section name from 00-
    if (filename.startsWith("00-")) {
        let title = contents.match(/^\# .+$/m);
        return `\n#${title[0]}\n\n`;
    }
    let headers = contents.matchAll(headerRE);
    for (const h of headers) {
        let level = h[1].length;
        let slug = h[2].toLowerCase().trim().replace(specials, '').replace(whitespace, '-');
        let relative_path = path.posix.relative(fakeOrigin, file);
        if (level == 1) {
            result += `${"  ".repeat(level - 1)}- [${h[2]}](${relative_path})\n`;
        }
        else {
            result += `${"  ".repeat(level - 1)}- [${h[2]}](${relative_path}#${slug})\n`;
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

console.log(`Process complete.\nSection headers written to: "${outputFile}"`);
process.exit(0);
