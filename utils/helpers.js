const whitespace = /\s/g;
const htmlTagsRE = /(<!--[\s\S]*?-->|<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*?)>)/g;
const specialCharacters = /[\u2000-\u206F\u2100-\u2BFF\u2E00-\u2E7F!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~‘’“”]/g;

function getValidAnchor(title) {
    return title.toLowerCase().trim().replace(htmlTagsRE, '').replace(specialCharacters, '').replace(whitespace, '-');
}

function stripHtml(text) {
    return text.replace(htmlTagsRE, '');
}

const compareOptions = { numeric: true, sensitivity: "base" };
function compareText(a, b) {
    return a.replace(htmlTagsRE, '').replace(specialCharacters, " ").trimStart().localeCompare(
        b.replace(htmlTagsRE, '').replace(specialCharacters, " ").trimStart(), undefined, compareOptions);
}


exports.getValidAnchor = getValidAnchor;
exports.compareText = compareText;
exports.stripHtml = stripHtml;