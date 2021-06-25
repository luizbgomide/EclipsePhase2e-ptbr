const fs = require("fs");
const path = require("path");

const srcFolder = "src";
const validFile = "valid-links.txt";

const linkRE = /(?!\\)\[.+?\]\((.+?)\)/gm;

const blockquoteRE = /\<blockquote.*?\<\/blockquote\>/gs;

function readDirectory(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
        if (file.isDirectory()) {
            readDirectory(path.posix.join(dir, file.name));
        } else if (file.isFile()) {
            processFile(path.posix.join(dir, file.name));
        } else {
            console.log("Something wrong: {}", file.name);
        }
    });
}

function processFile(file) {
    contents = fs.readFileSync(path.resolve(file), 'utf8');
    let links = contents.matchAll(linkRE);
    for (const l of links) {
        if (!validLinks.includes(l[1])) {
            console.log(`${file}: ${l[0]}`);
        }
    }
}


if (process.argv.length != 3 || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isDirectory()) {
    console.log("You must inform a valid source directory.");
    process.exit(1);
}
var sourceDir = path.posix.normalize(process.argv[2]);
var validLinks = fs.readFileSync(validFile, 'utf8').split('\n');
readDirectory(sourceDir);
console.log(`Process complete.`);
process.exit(0);
