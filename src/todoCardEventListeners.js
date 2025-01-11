import { Projects, makeTodoItemObject } from "./todos-module";
import { generateIndividualProjectPage } from "./displayIndividualProject";

export function setupTodoCardEventListeners() {
    // SELECT MAIN CONTENT
    const projectContainer = document.querySelector('#content');
    // SELECT PROJECT NAME FROM PROJECT HEADING
    const projectName = document.querySelector('.individual-project-heading').innerText;
    // SELECT TODO MODAL ELEMENTS
    const modal = document.querySelector('#edit-todo-modal');
    const closeModal = document.querySelector('.edit-modal-close-btn');
    const editTodoModalform = document.querySelector('.edit-todo-modal-form');

    const title = document.querySelector('#edit-title');
    const dueDate = document.querySelector('#edit-date');
    const priority = document.querySelector('#edit-priority');
    const description = document.querySelector('#edit-description');

    // EVENT LISTENER THAT LISTENS FOR CLICKS IN TODO CARDS DELETE BUTTONS
    projectContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('todo-delete-button')) {
            const todoTitle = event.target.parentElement.parentElement.id;
            Projects.removeTodoItemFromProject(projectName, todoTitle);
            generateIndividualProjectPage(projectName);
        }
    })

    // EVENT LISTENER THAT LISTENS FOR CLICKS IN TODO CARDS EDIT BUTTONS
    projectContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('todo-edit-button')) {
            const todoTitle = event.target.parentElement.parentElement.id;
            const todoObject = Projects.returnTodoObject(projectName, todoTitle);
            const indexOfTodoObject = Projects.returnIndexOfTodoObject(projectName, todoTitle);

            // TESTING
            console.log(todoObject);
            console.log(title, dueDate, priority, description);
            console.log(indexOfTodoObject);

            // OPEN MODAL AND POPULATE INPUTS WITH TODO OBJECTS FIELDS
            modal.showModal();
            title.value = todoObject.title;
            dueDate.value = todoObject.dueDate;
            priority.value = todoObject.priority;
            description.value = todoObject.description;

            editTodoModalform.addEventListener('submit', (event) => {
                event.preventDefault();

                const formData = new FormData(editTodoModalform);
        
                const title = formData.get('title');
                const duedate = formData.get('duedate');
                const priority = formData.get('priority');
                const description = formData.get('description');
        
                const updatedItem = makeTodoItemObject(
                    title, 
                    duedate, 
                    priority, 
                    description);

                Projects.updateTodoItem(projectName, updatedItem, indexOfTodoObject);

                modal.close();

                // REFRESH PROJECT PAGE
                generateIndividualProjectPage(projectName);
            })
        }
    })

    closeModal.addEventListener('click', () => {
        modal.close();
    })
}