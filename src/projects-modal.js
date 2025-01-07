import { createTodosProject, Projects } from "./todos-module";
import { generateProjectsPage } from "./displayProjects";

export function setupModalEventListeners() {
    const modal = document.querySelector('#projects-modal');
    const openModal = document.querySelector('.add-new-project');
    const closeModal = document.querySelector('.modal-close-btn');
    const projectModalForm = document.querySelector('.add-project-modal-form');

    openModal.addEventListener('click', () => {
        modal.showModal();
    })

    closeModal.addEventListener('click', () => {
        modal.close();
    })

    projectModalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const projectName = document.querySelector('#project-name');

        if (projectName.value) {
            // Update projects object with values stored in local storage
            Projects.updateProjectsObject();

            // ADD PROJECT TO GENERAL PROJECTS
            const newProject = createTodosProject(projectName.value);
            Projects.addProject(newProject.name, newProject.itemsArray);
            Projects.updateLocalStorage();

            console.log(Projects.getProjectsObject());

            // TESTING
            console.log(projectName.value);

            // REMOVE CONTENT FROM INPUT
            projectName.value = '';
        }

        // UPDATE PROJECTS PAGE AND CLOSE MODAL
        generateProjectsPage('id', 'content');
        modal.close();
    })
}
