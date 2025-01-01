import { Projects } from "./todos-module";
import { generateProjectsPage } from "./displayProjects";

export function setupProjectCardButtonsEventListeners() {
    const mainContent = document.querySelector('#content');
    mainContent.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const projectToBeRemoved = event.target.parentElement.parentElement.id;
            Projects.removeProject(projectToBeRemoved);

            Projects.updateLocalStorage();
            // Refresh projects page
            generateProjectsPage('id', 'content');
        }
    });
}


