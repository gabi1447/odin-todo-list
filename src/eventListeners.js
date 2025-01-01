import { generateHomePage } from "./home";
import { generateProjectsPage } from "./displayProjects";

import logo from "./todo-list-logo.png";

export function setupStaticEventListeners() {
    const selectors = {
        home: document.querySelector('#home'),
        projects: document.querySelector('#projects')
    }

    selectors.home.addEventListener('click', () => {
        generateHomePage('id', 'content', logo, 'Plan and Organize');
    });

    selectors.projects.addEventListener('click', () => {
        generateProjectsPage('id', 'content');
    });
}