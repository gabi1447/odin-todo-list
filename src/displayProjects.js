import './styles-projects.css';

import { removeElementContent, selectDomElement, addClassToSelector } from "./generalPurposeModule";
import { makeTodoItemObject, createTodosProject, Project, Projects } from './todos-module'
import { setupModalEventListeners } from './projects-modal';
import { setupProjectCardButtonsEventListeners } from './projectCardEventListeners';

import searchIcon from './search.svg';
import deleteIcon from './delete.svg';

const CLASSNAME = 'projects-content';

export function generateProjectsPage(selectorType, selectorName) {
    const homeContent = selectDomElement(selectorType, selectorName);
    removeElementContent(homeContent);
    addClassToSelector(homeContent, CLASSNAME);

    const projectsObject = Projects.retrieveProjectsDataFromLocalStorage();
    if (projectsObject === null) {
        createProjectAndSaveItToLocalStorage('default');
    };

    const heading = generateProjectsHeading()
    homeContent.appendChild(heading);

    const btnAddProject = generateButton('add-new-project', '', 'New Project');
    homeContent.appendChild(btnAddProject);

    renderProjects(homeContent);
    setupModalEventListeners();
    setupProjectCardButtonsEventListeners();
}

function generateProjectsHeading() {
    const heading1 = document.createElement('h1');
    heading1.className = 'heading-projects';
    heading1.innerText = 'Projects';
    return heading1;
}

function createProjectAndSaveItToLocalStorage(projectName) {
    const project = createTodosProject(projectName);
    Projects.addProject(project.name, project.itemsArray);
    Projects.updateLocalStorage();
}

function renderProjects(containerElement) {
    const projectsObject = Projects.retrieveProjectsDataFromLocalStorage();

    // ITERATE OVER PROJECTS OBJECT AND GENERATE PROJECT CARDS BASED ON THEIR KEY NAMES
    for (const key in projectsObject) {
        const project = generateProject(key);
        containerElement.appendChild(project);
    }
}

function generateProject(projectKeyName) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.id = projectKeyName;

    const projectCardHeading = generateProjectHeading(projectKeyName);
    const buttonContainer = generateUiButtons();

    projectCard.appendChild(projectCardHeading);
    projectCard.appendChild(buttonContainer);

    return projectCard;
}

function generateProjectHeading(projectName) {
    const projectCardHeading = document.createElement('h3');
    projectCardHeading.className = 'project-card-heading';
    projectCardHeading.innerText = projectName;

    return projectCardHeading;
}

function generateUiButtons() {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const visitButton = generateButton('visit-button', searchIcon);

    const deleteButton = generateButton('delete-button', deleteIcon);

    buttonContainer.appendChild(visitButton);
    buttonContainer.appendChild(deleteButton);

    return buttonContainer;
}

export function generateButton(btnClassName, svgIcon='', btnContent='') {
    const button = document.createElement('button');
    button.className = btnClassName;

    if (svgIcon === '') {
        
    } else {
        const image = generateImage(svgIcon);
        button.appendChild(image);
    }

    if (btnContent === '') {

    } else {
        button.innerText = btnContent;
    }

    return button;
}

function generateImage(svgIcon) {
    const image = document.createElement('img');
    image.src = svgIcon;
    image.className = 'svg-icon';

    image.style.width = '1.5vw';
    image.style.height = 'auto';

    return image;
}