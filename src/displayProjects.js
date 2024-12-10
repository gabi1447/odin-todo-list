import './styles-projects.css'

import { removeElementContent, selectDomElement } from "./generalPurposeModule";
import { makeTodoItemObject, createTodosProject, Project, Projects } from './todos-module'

export function generateProjectsPage(selectorType, selectorName) {
    const homeContent = selectDomElement(selectorType, selectorName);
    removeElementContent(homeContent);

    const heading = generateProjectsHeading()
    homeContent.appendChild(heading);
}

function generateProjectsHeading() {
    const heading1 = document.createElement('h1');
    heading1.className = 'heading-projects';
    heading1.innerText = 'Projects';
    return heading1;
}

function createProjectAndSaveItToLocalStorage(projectName) {
    const project = createTodosProject(projectName);
    Projects.addProject(project.name, defaultProject.itemsArray);
    Projects.updateLocalStorage();
}