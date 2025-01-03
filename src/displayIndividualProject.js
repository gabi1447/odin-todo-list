import { generateButton } from "./displayProjects";
import { addClassToSelector, removeElementContent, selectDomElement } from "./generalPurposeModule";

const CLASSNAME = 'individual-project-content';

export function generateIndividualProjectPage(projectName, arrayOfTodosProject) {
    // Takes project object builds individual project page using
    // its name field and array of items for the heading and list
    // of todos

    // Testing
    console.log(projectName);
    console.log(arrayOfTodosProject);

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
}

function generateIndividualProjectHeading(projectName) {
    const projectHeading = document.createElement('h1');
    projectHeading.innerText = projectName;
    projectHeading.className = 'individual-project-heading';

    return projectHeading;
}