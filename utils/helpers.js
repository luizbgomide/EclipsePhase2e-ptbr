const whitespace = /\s/g;
const htmlTagsRE = /(<!--[\s\S]*?-->|<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*?)>)/g;
const specialPunctuation = /[\u2000-\u206F\u2E00-\u2E7F!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~‘’“”]/g;

function getValidAnchor(title) {
    return title.toLowerCase().trim().replace(htmlTagsRE, '').replace(specialPunctuation, '').replace(whitespace, '-');
}

function stripHtml(text) {
    text.replace(htmlTagsRE, '');
}

const compareOptions = { numeric: true, sensitivity: "base" };
function compareText(a, b) {
    return a.replace(htmlTagsRE, '').replace(specialPunctuation, " ").trimStart().localeCompare(
        b.replace(htmlTagsRE, '').replace(specialPunctuation, " ").trimStart(), undefined, compareOptions);
}


exports.getValidAnchor = getValidAnchor;
exports.specialPunctuation = specialPunctuation;