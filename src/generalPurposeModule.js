function turnStringWithSpacesToHighens(string) {
    return string.replaceAll(/\s+/g, "-");
}

function turnStringWithHighensToSpaces(string) {
    return string.replaceAll(/-/g, " ");
}

