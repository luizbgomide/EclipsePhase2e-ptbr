const fs = require("fs");
const path = require("path");

const mappedLinksFile = "mapped-links.txt";


const linkRE = /(?!\\)\[(?:\\\]|[^\]])+?\]\((.+?)\)/gm;

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
    if (path.extname(file) != ".md") {
        return "";
    }
    const dirname = path.dirname(file);
    contents = fs.readFileSync(path.resolve(file), 'utf8');
    let links = contents.matchAll(linkRE);
    for (const linkMatch of links) {
        let [link, slug] = linkMatch[1].split('#');
        slug = slug ? `#${slug}` : "";
        // this link just targets a file
        if (slug === "")
            continue;
        let relativeLink = (link === "")
            ? path.posix.relative(sourceDir, file)
            : path.posix.relative(sourceDir, path.posix.join(dirname, link));
        if (!mappedLinks.has(relativeLink + slug)) {
            console.log(`! ${file}: ${linkMatch[0]}`);
        } else {
            const newSlug = mappedLinks.get(relativeLink + slug);
            const newLink = path.posix.relative(dirname, path.posix.resolve(dirname, link));
            contents = contents.replace(`(${linkMatch[1]})`, `(${link}#${newSlug})`);
            //console.log([linkMatch[1], `${link}#${newSlug}`]);
        }
    }
    fs.writeFileSync(file, contents);
}


if (process.argv.length != 3 || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isDirectory()) {
    console.log("You must inform a valid source directory.");
    process.exit(1);
}
const sourceDir = path.posix.normalize(process.argv[2]);
const sourceFile = path.join(sourceDir, "..", mappedLinksFile);
const mappedLinks = new Map(fs.readFileSync(sourceFile, 'utf8').split('\n').map(line => line.split('\t')));
readDirectory(sourceDir);
console.log(`Process complete.`);
process.exit(0);
