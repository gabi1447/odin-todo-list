import { removeElementContent, selectDomElement } from "./generalPurposeModule";

export function generateHomePage(selectorType, selectorName, imageJs, headlineText) {
    const homeContent = selectDomElement(selectorType, selectorName);
    removeElementContent(homeContent);

    const homepageLogo = generateHomeLogo(imageJs);
    homeContent.appendChild(homepageLogo);

    const homepageHeadline = generateHeadline(headlineText);
    homeContent.appendChild(homepageHeadline);
}

function generateHomeLogo(imageJs) {
    const logoImg = document.createElement('img');
    logoImg.className = 'home-logo';
    logoImg.src = imageJs;

    return logoImg;
}

function generateHeadline(headlineText) {
    const homepageHeadline = document.createElement('h2');
    homepageHeadline.className = 'homepage-headline';
    homepageHeadline.innerText = headlineText;

    return homepageHeadline;
}