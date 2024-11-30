export function turnStringWithSpacesToHighens(string) {
    return string.replaceAll(/\s+/g, "-");
}

export function turnStringWithHighensToSpaces(string) {
    return string.replaceAll(/-/g, " ");
}

export function removeElementContent(selector) {
    selector.innerText = '';
}

