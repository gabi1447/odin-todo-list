// Local Storage functions
export function sendToLocalStorage(key, value) {
    const valueJson = JSON.stringify(value);
    localStorage.setItem(key, valueJson);
}

export function retrieveFromLocalStorage(key) {
    const dataRetrievedInJson = localStorage.getItem(key);
    return JSON.parse(dataRetrievedInJson);
}
