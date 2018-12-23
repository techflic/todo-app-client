import { authHeader } from "../commons";
import { userService } from "./user.service";

export const todoService = {
    createTodo,
    getTodo,
    editTodo,
    deleteTodo,
    uploadFile
};

const _API = "http://127.0.0.1:3001/api/v1";

const TODO_API = `${_API}/todo`;

function createTodo(todo) {
    const requestOptions = {
        method: "PUT",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify(todo)
    };

    return fetch(`${TODO_API}/`, requestOptions).then(handleResponse);
}

function getTodo(userId) {
    const requestOptions = {
        method: "GET",
        headers: { ...authHeader(), "Content-Type": "application/json" }
    };

    return fetch(`${TODO_API}/${userId}`, requestOptions).then(handleResponse);
}

function editTodo(userId, todoId, todoUpdateBody) {
    const requestOptions = {
        method: "PUT",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify(todoUpdateBody)
    };

    return fetch(`${TODO_API}/${userId}/${todoId}`, requestOptions).then(handleResponse);
}

function deleteTodo(userId, todoId) {
    const requestOptions = {
        method: "DELETE",
        headers: { ...authHeader(), "Content-Type": "application/json" }
    };

    return fetch(`${TODO_API}/${userId}/${todoId}`, requestOptions).then(handleResponse);
}

function uploadFile(userId, todoId, formData) {
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: formData
    }

    return fetch(`${TODO_API}/upload/${userId}/${todoId}`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
    //console.log("Fetch / API response handler : ", response);
    return response.text().then(text => {
        //console.log("Response text / JSON string : ", text);
        const _response = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                userService.logout();
                window.location.reload(true);
            }
            const error =
                (_response && _response.message) || response.statusText;
            return Promise.reject(error);
        }
        //console.log("Response : ", _response);
        return _response;
    });
}
