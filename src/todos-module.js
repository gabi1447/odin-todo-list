import { turnStringWithHighensToSpaces as highensToSpaces } from './generalPurposeModule.js';

export function makeTodoItemObject(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority, 
    }
}

export function createTodosProject(projectName) {
    let todosArray = [];

    function addTodoItemToProject(todoItemObject) {
        todosArray.push(todoItemObject);
    }

    function removeTodoItemFromProject(todoTitleStringWithHighens) {
        const title = highensToSpaces(todoTitleStringWithHighens);
        todosArray.forEach((itemObject) => {
            if (itemObject.title === title) {
                const indexOfObject = todosArray.indexOf(itemObject);
                todosArray.splice(indexOfObject, 1);
            }
        })
    }

    // Testing
    function returnTodoItems() {
        return todosArray;
    }

    return {
        name: projectName,
        addTodoItemToProject, 
        removeTodoItemFromProject,
        returnTodoItems
    }
}
