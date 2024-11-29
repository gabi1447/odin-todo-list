import './styles.css'
import './styles-home.css'

import logo from './todo-list-logo.png'

import { generateHomePage } from "./home"

function main() {
    generateHomePage('id', 'content', logo);
}

main();