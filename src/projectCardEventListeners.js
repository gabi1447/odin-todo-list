import { Projects } from "./todos-module";
import { generateProjectsPage } from "./displayProjects";
import { generateIndividualProjectPage } from "./displayIndividualProject";

export function setupProjectCardButtonsEventListeners() {
    const mainContent = document.querySelector('#content');
    
    mainContent.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const projectToBeRemoved = event.target.parentElement.parentElement.id;
            Projects.removeProject(projectToBeRemoved);
            Projects.updateLocalStorage();

            generateProjectsPage('id', 'content');

        } else if (event.target.classList.contains('visit-button')) {
            const projectToVisitName = event.target.parentElement.parentElement.id;

            generateIndividualProjectPage(projectToVisitName);
        }
    });
}


