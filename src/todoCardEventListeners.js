import { Projects } from "./todos-module";
import { generateIndividualProjectPage } from "./displayIndividualProject";

export function setupTodoCardEventListeners() {
    // SELECT MAIN CONTENT
    const projectContainer = document.querySelector('#content');
    // SELECT PROJECT NAME FROM PROJECT HEADING
    const projectName = document.querySelector('.individual-project-heading').innerText;

    // EVENT LISTENER THAT LISTENS FOR CLICKS IN TODO CARDS DELETE BUTTONS
    projectContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('todo-delete-button')) {
            const todoTitle = event.target.parentElement.parentElement.id;
            Projects.removeTodoItemFromProject(projectName, todoTitle);
            generateIndividualProjectPage(projectName);
        }
    })
}