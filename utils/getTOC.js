const fs = require("fs");
const path = require("path");
const { getValidAnchor } = require("./helpers");

const tocMarker = "<!-- TOC PLACEHOLDER -->";
const headerRE = /^(\#+)\s+(.+)$/gm;
const blockquoteRE = /\<blockquote.*?\<\/blockquote\>/gs;

function readDirectory(dir) {

    let dirList = fs.readdirSync(dir, { withFileTypes: true }).sort();
    dirList.filter((file) => file.isDirectory()).forEach((file) => {
        readDirectory(path.posix.join(dir, file.name));
    });
    if (dir != sourceDir) {
        let tocFile = dirList.find((file) => file.isFile() && file.name.startsWith("00-"));
        if (tocFile) {
            tocFile = path.resolve(path.posix.join(dir, tocFile.name));
            let contents = fs.readFileSync(tocFile, 'utf8');
            let index = contents.indexOf(tocMarker);
            if (index == -1) return;
            contents = contents.substring(0, index + tocMarker.length) + '\n\n';
            let result = "";
            process.stdout.write("Creating TOC for: " + tocFile + '\n');
            dirList.filter((file) => file.isFile() && !file.name.startsWith("00-")).forEach((file) => {
                result += processFile(path.posix.join(dir, file.name));
            });
            fs.writeFileSync(tocFile, contents + result);
        }

    }
}

function processFile(file) {
    let result = '';
    // just process files start with ##-
    let filename = path.basename(file);
    if (!/^\d\d\-/.test(filename)) {
        return "";
    }
    if (path.extname(file) != ".md") {
        return "";
    }
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
