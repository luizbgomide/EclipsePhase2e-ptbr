const fs = require("fs");
const path = require("path");
const { getValidAnchor } = require("./helpers");

const outputFile = "mapped-links.txt";

const headerRE = /^(\#+)\s+(.+)$/gm;

function getSlugs(content) {
    const links = new Map();
    for (line of content.split('\n')) {
        const [file, slug] = line.split('#', 2).map(parts => parts.trim());
        if (slug === undefined)
            continue;
        const slugs = (links.get(file) ?? []);
        links.set(file, slugs);
        slugs.push(slug);
    }
    return links
}

function mapLinks(sourceContent, targetContent) {
    const sourceLinks = getSlugs(sourceContent);
    const targetLinks = getSlugs(targetContent);
    const result = [];
    for (file of sourceLinks.keys()) {
        sSlugs = sourceLinks.get(file);
        tSlugs = targetLinks.get(file);
        if (tSlugs === undefined) {
            console.log(`${file}: MISSING SLUGS`);
            continue;
        }
        if (sSlugs.length !== tSlugs.length) {
            console.log(`${file}: WRONG SLUG COUNT (${sSlugs.length}<>${tSlugs.length})`);
            continue;
        }
        while (tSlugs.length > 0) {
            result.push(`${file}#${sSlugs.shift()}\t${tSlugs.shift()}`)
        }
    }
    return result;
}


if (process.argv.length !== 4
    || !fs.statSync(process.argv[2], { throwIfNoEntry: false })?.isFile()
    || !fs.statSync(process.argv[3], { throwIfNoEntry: false })?.isFile()) {
    console.log("You must inform a source and target valid-link files.");
    process.exit(1);
}
const sourceContent = fs.readFileSync(path.resolve(process.argv[2]), 'utf8');
const targetContent = fs.readFileSync(path.resolve(process.argv[3]), 'utf8');
const mappedLinks = mapLinks(sourceContent, targetContent);
fs.writeFileSync(outputFile, mappedLinks.join('\n'));

console.log(`Process complete.\nMapped links written to: "${outputFile}"`);
process.exit(0);
