import { generateButton } from "./displayProjects";
import { addClassToSelector, removeElementContent, selectDomElement } from "./generalPurposeModule";
import { Projects } from "./todos-module";
import { setupIndividualProjectModalEventListeners } from "./addTodoItemToProjectModal";

import deleteIcon from "./delete.svg";
import editIcon from "./edit.svg";

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
    renderTodoItems(projectName, mainContent);
    setupIndividualProjectModalEventListeners();
}

function generateIndividualProjectHeading(projectName) {
    const projectHeading = document.createElement('h1');
    projectHeading.innerText = projectName;
    projectHeading.className = 'individual-project-heading';

    return projectHeading;
}

function renderTodoItems(projectName, container) {
    const projectsObject = Projects.retrieveProjectsDataFromLocalStorage();
    const arrayOfItemsOfIndividualProject = projectsObject[projectName];
    arrayOfItemsOfIndividualProject.forEach(todo => {
        console.log(todo);
        const itemCard = generateTodoCard(todo);
        container.appendChild(itemCard);

    })
}

function generateTodoCard(todoObject) {
    const todoCard = document.createElement('div');
    todoCard.className = 'todo-card';
    todoCard.id = todoObject.title;

    // TITLE
    const title = document.createElement('h2');
    title.className = 'todo-title';
    title.innerText = todoObject.title;
    // DUEDATE
    const dueDate = document.createElement('p');
    dueDate.className = 'todo-duedate';
    dueDate.innerText = todoObject.dueDate;
    // PRIORITY
    const priority = document.createElement('p');
    priority.className = 'todo-priority';
    priority.innerText = todoObject.priority;
    // DESCRIPTION
    const description = document.createElement('p');
    description.className = 'todo-description';
    description.innerText = todoObject.description;

    // GENERATE BUTTON CONTAINER WITH EDIT AND DELETE BUTTONS
    const buttonContainer = generateTodoCardButtons();

    // ADD FIELDS TO ITEM CARD
    todoCard.append(title, dueDate, priority, description, buttonContainer);

    // RETURN ITEM CARD
    return todoCard;
}

function generateTodoCardButtons() {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'todo-card-button-container';

    const deleteButton = generateButton('todo-delete-button', deleteIcon);
    const editButton = generateButton('todo-edit-button', editIcon);

    buttonContainer.append(editButton, deleteButton);

    return buttonContainer;
}