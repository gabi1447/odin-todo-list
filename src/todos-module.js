import { turnStringWithHighensToSpaces as highensToSpaces } from './generalPurposeModule.js';
import { sendToLocalStorage, retrieveFromLocalStorage } from './localStorageModule.js';

export function makeTodoItemObject(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority, 
    }
}

export function createTodosProject(projectName) {
    let todosObjectsArray = [];

    return {
        name: projectName,
        itemsArray: todosObjectsArray
    }
}

export const Project =(function() {
    function addTodoItemToProject(todoItemObject, projectObject) {
        projectObject.itemsArray.push(todoItemObject);
    }

    function removeTodoItemFromProject(todoTitleStringWithHighens, projectObject) {
        const title = highensToSpaces(todoTitleStringWithHighens);
        projectObject.itemsArray.forEach((itemObject) => {
            if (itemObject.title === title) {
                const indexOfObject = todosArray.indexOf(itemObject);
                projectObject.itemsArray.splice(indexOfObject, 1);
            }
        })
    }

    function returnTodoItems(projectObject) {
        return projectObject.itemsArray;
    }

    return {
        addTodoItemToProject, 
        removeTodoItemFromProject,
        returnTodoItems
    }
});

export const Projects = (function(){
    let localStorageKeyName = 'projectsObject';
    let projectsObject = {};

    function getProjectsKey() {
        return localStorageKeyName
    }

    function changeProjectsKeyName(newProjectsName) {
        localStorageKeyName = newProjectsName;
    }

    function getProjectsObject() {
        return projectsObject;
    }

    function AddProject(projectName, ArrayOfItems) {
        projectsObject[projectName] = ArrayOfItems;
    }

    function removeProject(projectName) {
        delete projectsObject[projectName];
    }

    function updateLocalStorage() {
        const projectsKeyName = getProjectsKey();
        const projectsData = getProjectsObject();
        sendToLocalStorage(projectsKeyName, projectsData);
    }

    function retrieveProjectsDataFromLocalStorage() {
        const projectsKeyName = getProjectsKey();
        return retrieveFromLocalStorage(projectsKeyName);
    }

    function updateProjectsObject(newProjectsObject) {
        projectsObject = newProjectsObject;
    }

    return {
        changeProjectsKeyName,
        updateLocalStorage,
        retrieveProjectsDataFromLocalStorage,
        updateProjectsObject,
        AddProject,
        removeProject
    }
})();