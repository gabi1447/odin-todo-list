import { generateButton } from "./displayProjects";
import { addClassToSelector, removeElementContent, selectDomElement } from "./generalPurposeModule";
import { Projects } from "./todos-module";
import { setupIndividualProjectModalEventListeners } from "./addTodoItemToProjectModal";

const CLASSNAME = 'individual-project-content';

export function generateIndividualProjectPage(projectName) {

    const mainContent = selectDomElement('id', 'content');
    // clear content of div content
    removeElementContent(mainContent);
    addClassToSelector(mainContent, CLASSNAME);
    // populate div content with project name heading
    const projectHeading = generateIndividualProjectHeading(projectName);
    mainContent.appendChild(projectHeading);
    // add button that adds todo items
    const addTodoItemBtn = generateButton('add-todo-item-btn', '', 'Add Todo');
    mainContent.appendChild(addTodoItemBtn);
    // render todo items of project if there are any in project's array of todos
    renderTodoItems(projectName);
    setupIndividualProjectModalEventListeners();
}

function generateIndividualProjectHeading(projectName) {
    const projectHeading = document.createElement('h1');
    projectHeading.innerText = projectName;
    projectHeading.className = 'individual-project-heading';

    return projectHeading;
}

function renderTodoItems(projectName) {
    const projectsObject = Projects.retrieveProjectsDataFromLocalStorage();
    const arrayOfItemsOfIndividualProject = projectsObject[projectName];
    arrayOfItemsOfIndividualProject.forEach(todo => {
        console.log(todo);
    })
}