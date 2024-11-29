function selectDomElement(selectorType, selector) {
    let content;
    if (selectorType === 'id') {
        content = document.querySelector(`#${selector}`);
    } else if (selectorType === 'class') {
        content = document.querySelector(`.${selector}`);
    }
    return content;
}

export function generateHomePage(selectorType, selectorName, imageJs) {
    const homeContent = selectDomElement(selectorType, selectorName);

    const homepageLogo = generateHomeLogo(imageJs);
    homeContent.appendChild(homepageLogo);
}

function generateHomeLogo(imageJs) {
    const logoImg = document.createElement('img');
    logoImg.className = 'home-logo';
    logoImg.src = imageJs;

    return logoImg;
}