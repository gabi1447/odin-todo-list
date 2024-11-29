function selectDomElement(selectorType, selector) {
    let content;
    if (selectorType === 'id') {
        content = document.querySelector(`#${selector}`);
    } else if (selectorType === 'class') {
        content = document.querySelector(`.${selector}`);
    }
    return content;
}

export function generateHomePage(selectorType, selectorName, imageJs, headlineText) {
    const homeContent = selectDomElement(selectorType, selectorName);

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