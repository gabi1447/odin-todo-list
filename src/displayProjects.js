import './styles-projects.css'

import { removeElementContent, selectDomElement } from "./generalPurposeModule";
import { makeTodoItemObject, createTodosProject, Project, Projects } from './todos-module'

export function generateProjectsPage(selectorType, selectorName) {
    const homeContent = selectDomElement(selectorType, selectorName);
    removeElementContent(homeContent);

    const projectsObject = Projects.retrieveProjectsDataFromLocalStorage();
    if (projectsObject === null) {
        createProjectAndSaveItToLocalStorage('default');
    };

    const heading = generateProjectsHeading()
    homeContent.appendChild(heading);

    renderProjects(homeContent);
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
    const projectCardHeading = document.createElement('h2');
    projectCardHeading.className = 'project-card-heading';
    projectCardHeading.innerText = projectName;

    return projectCardHeading;
}

function generateUiButtons() {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttonContainer';

    const visitButton = generateButton('visit-button', 'visit');

    const deleteButton = generateButton('delete-button', 'delete');

    buttonContainer.appendChild(visitButton);
    buttonContainer.appendChild(deleteButton);

    return buttonContainer;
}

function generateButton(btnClassName, btnText) {
    const button = document.createElement('button');
    button.className = btnClassName;
    button.innerText = btnText;

    return button;
}