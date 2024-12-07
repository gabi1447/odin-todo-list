import { removeElementContent, selectDomElement } from "./generalPurposeModule";

export function generateProjectsPage(selectorType, selectorName) {
    const homeContent = selectDomElement(selectorType, selectorName);
    removeElementContent(homeContent);
    homeContent.innerText = 'Projects';
}