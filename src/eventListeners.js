import { generateHomePage } from "./home";
import { generateProjectsPage } from "./displayProjects";

import logo from "./todo-list-logo.png";

const selectors = {
    home: document.querySelector('#home'),
    projects: document.querySelector('#projects')
}

export function setupStaticEventListeners() {
    selectors.home.addEventListener('click', () => {
        generateHomePage('id', 'content', logo, 'Plan and Organize');
    });
    selectors.projects.addEventListener('click', () => {
        generateProjectsPage('id', 'content');
    });
}