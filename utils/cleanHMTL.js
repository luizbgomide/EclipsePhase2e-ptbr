// Remove div's and blockquote's from the MD files in src/

const fs = require("fs");
const path = require("path");
const readline = require('readline');


// div and blockquotes messes up with crowdin format
// wbr forces crowdin to rebuild the MD tables as HTML tables
const tagsRE = /\<(\/?(?:div|blockquote|wbr)\b.*?)\>/g;
const replace = "<!-- CLEANED $1 -->";

function readDirectory(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach((item) => {
        if (item.isDirectory()) {
            readDirectory(path.join(dir, item.name));
        } else if (item.isFile()) {
            processFile(path.join(dir, item.name));
        } else {
            console.log("Something wrong: {}", item.name);
        }
    });
    process.stdout.write("\n");
}

function processFile(file) {
    contents = fs.readFileSync(file, 'utf8');
    let result = contents.replace(tagsRE, replace)
    let target = path.join(outputDir, path.relative(sourceDir, file));
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, result);
    process.stdout.write(".");
}

if (process.argv.length != 3 || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isDirectory()) {
    console.log("You must inform a valid source directory.");
    process.exit(1);
}
var sourceDir = path.resolve(process.argv[2]);
var outputDir = sourceDir + ".clean_html";

if (fs.statSync(outputDir, { throwIfNoEntry: false })?.isDirectory()) {
    console.log(`Target directory "${outputDir}" already exists.`);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Overwrite [y/n]? ', (answer) => {
        if (answer == "y") {
            fs.rmdirSync(outputDir, { recursive: true });
            cleanHTML();
            process.exit(0)
        }
        else {
            console.log("Exiting...");
            process.exit(1);
        }
    });
}
else {
    cleanHTML();
}

function cleanHTML() {
    readDirectory(sourceDir);
    console.log(`\n\nProcess complete.\nHTML-clean files written to: "${outputDir}"`);
}
