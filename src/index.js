import './styles.css';
import './styles-home.css';
import './styles-modal.css';

import logo from './todo-list-logo.png'

import { generateHomePage } from "./home"
import { setupStaticEventListeners } from './eventListeners'

function main() {
    setupStaticEventListeners();
    generateHomePage('id', 'content', logo, 'Plan and Organize');
}

main();