export function turnStringWithSpacesToHighens(string) {
    return string.replaceAll(/\s+/g, "-");
}

export function turnStringWithHighensToSpaces(string) {
    return string.replaceAll(/-/g, " ");
}

export function removeElementContent(selector) {
    selector.innerText = '';
}

export function selectDomElement(selectorType, selector) {
    let content;
    if (selectorType === 'id') {
        content = document.querySelector(`#${selector}`);
    } else if (selectorType === 'class') {
        content = document.querySelector(`.${selector}`);
    }
    return content;
}

export function addClassToSelector(selector, className) {
    selector.className = className;
}
