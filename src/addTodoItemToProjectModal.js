import { makeTodoItemObject } from "./todos-module";
import { Projects } from "./todos-module";
import { generateIndividualProjectPage } from "./displayIndividualProject";

export function setupIndividualProjectModalEventListeners() {
    const modal = document.querySelector('#individual-project-modal');
    const openModal = document.querySelector('.add-todo-item-btn');
    const closeModal = document.querySelector('.individual-modal-close-btn');
    const individualProjectModalForm = document.querySelector('.add-todo-modal-form');

    openModal.addEventListener('click', () => {
        modal.showModal();
    });

    closeModal.addEventListener('click', () => {
        modal.close();
    });

    individualProjectModalForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(individualProjectModalForm);

        // Form Testing

        // Capturing all fields from form
        const title = formData.get('title');
        const duedate = formData.get('duedate');
        const priority = formData.get('priority');
        const description = formData.get('description');

        // Testing
        /* console.log(title, duedate, priority, description); */

        // Building Todo-item object
        const todoObject = makeTodoItemObject(
            title, 
            duedate, 
            priority, 
            description);
            
        // Adding the todo-item object to the array of items of the project
            // Updating Projects object
        Projects.updateProjectsObject();
            // Getting projectName
        const projectName = getProjectNameFromUI();
        Projects.addTodoObjectToIndividualProjectArray(projectName, todoObject);

        modal.close();

        // Refresh individual project page with the updated todo items.
        const projectArrayOfTodos = Projects.getProjectsObject()[projectName]
        generateIndividualProjectPage(projectName, projectArrayOfTodos);
    })
}

function getProjectNameFromUI() {
    return document.querySelector('.individual-project-heading').innerText;
}