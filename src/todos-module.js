import { sendToLocalStorage, retrieveFromLocalStorage } from './localStorageModule.js';

export function makeTodoItemObject(title, dueDate, priority, description) {
    return {
        title: title,
        dueDate: dueDate,
        priority: priority, 
        description: description,
    }
}

export function createTodosProject(projectName) {
    let todosObjectsArray = [];

    return {
        name: projectName,
        itemsArray: todosObjectsArray
    }
}

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

    function addProject(projectName, ArrayOfItems) {
        projectsObject[projectName] = ArrayOfItems;
    }

    function addTodoObjectToIndividualProjectArray(projectName, todoObject) {
        updateProjectsObject();
        if (isTitleAlreadyPresentInProjectTodosArray(projectName, todoObject)) {

        } else {
            projectsObject[projectName].push(todoObject);
            updateLocalStorage();
        }

    }

    function isTitleAlreadyPresentInProjectTodosArray(projectName, todoObject) {
        updateProjectsObject();
        const projectTodosArray = getProjectsObject()[projectName];
        for (let itemObject of projectTodosArray) {
            if (itemObject.title === todoObject.title) {
                return true;
            }
        }
        return false;
    }

    function returnTodoObject(projectName, todoTitle) {
        updateProjectsObject();
        const projectArrayOfTodos = getProjectsObject()[projectName];

        return projectArrayOfTodos.filter(itemObject => {
            if (itemObject.title === todoTitle) {
                return itemObject;
            }
        })[0];
    }

    function returnIndexOfTodoObject(projectName, todoTitle) {
        updateProjectsObject();
        const projectTodosArray = getProjectsObject()[projectName];
        return projectTodosArray.findIndex(todo => todo.title === todoTitle);
    }

    function removeProject(projectName) {
        delete projectsObject[projectName];
    }

    function removeTodoItemFromProject(projectName, titleToDelete) {
        updateProjectsObject();
        const todosArrayOfIndividualProject = getProjectsObject()[projectName];

        // TESTING REMOVE
        console.log(todosArrayOfIndividualProject);

        const updatedArray = todosArrayOfIndividualProject.filter(itemObject => {
            if (itemObject.title !== titleToDelete) {
                return itemObject;
            } 
        })

        // REMOVE
        console.log(updatedArray);

        projectsObject[projectName] = updatedArray;
        updateLocalStorage();
    }

    function updateTodoItem(projectName, todoObject, itemIndex) {
        updateProjectsObject();
        if (isTitleAlreadyPresentInProjectTodosArray(projectName, todoObject)) {

        } else {
            projectsObject[projectName][itemIndex] = todoObject;
            updateLocalStorage();
        }
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

    function updateProjectsObject() {
        projectsObject = retrieveProjectsDataFromLocalStorage();
    }

    return {
        changeProjectsKeyName,
        getProjectsObject,
        updateLocalStorage,
        retrieveProjectsDataFromLocalStorage,
        updateProjectsObject,
        updateTodoItem,
        addProject,
        addTodoObjectToIndividualProjectArray,
        removeProject,
        removeTodoItemFromProject,
        returnTodoObject,
        returnIndexOfTodoObject
    }
})();