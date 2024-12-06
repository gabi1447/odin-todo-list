import { generateHomePage } from "./home";
import { generateProjectsPage } from "./displayProjects";

import logo from "./todo-list-logo.png";

const targetStaticElements = {
    home: document.querySelector('#home'),
    projects: document.querySelector('#projects')
}

export function setupStaticEventListeners() {
    targetStaticElements.home.addEventListener('click', () => {
        generateHomePage('id', 'content', logo, 'Plan and Organize');
    });
    targetStaticElements.projects.addEventListener('click', () => {
        generateProjectsPage('id', 'content');
    });
}