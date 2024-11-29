export function selectDomElement(selectorType, selector) {
    let content;
    if (selectorType === 'id') {
        content = document.querySelector(`#${selector}`);
    } else if (selectorType === 'class') {
        content = document.querySelector(`.${selector}`);
    }
    return content;
}