import { todoConstants } from "./../constants/actionTypes";
import { todoService } from "./../../services/todo.services";

export const todoActions = {
    createTodo,
    getTodo,
    editTodo,
    deleteTodo,
    uploadFile,
    toggleShowArchived
};

function createTodo(todo) {
    return (dispatch, getState) => {
        dispatch(request());
        todoService.createTodo(todo).then(
            response => {
                dispatch(success(response));
            },
            error => {
                dispatch(failure(error));
            }
        );
    };

    function request() {
        return { type: todoConstants.CREATE_TODO_REQUEST };
    }
    function success(payload) {
        return { type: todoConstants.CREATE_TODO_SUCCESS, payload };
    }
    function failure(error) {
        return { type: todoConstants.CREATE_TODO_FAILURE, error };
    }
}

function getTodo(userId) {
    return (dispatch, getState) => {
        dispatch(request());

        todoService.getTodo(userId).then(
            response => {
                dispatch(success(response));
            },
            error => {
                dispatch(failure(error));
            }
        );
    };

    function request() {
        return { type: todoConstants.GET_TODO_REQUEST };
    }
    function success(payload) {
        return { type: todoConstants.GET_TODO_SUCCESS, payload };
    }
    function failure(error) {
        return { type: todoConstants.GET_TODO_FAILURE, error };
    }
}

function editTodo(todoId, todoUpdateBody) {
    return (dispatch, getState) => {
        dispatch(request());

        todoService
            .editTodo(getState().user.user.id, todoId, todoUpdateBody)
            .then(
                response => {
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() {
        return { type: todoConstants.EDIT_TODO_REQUEST };
    }
    function success(payload) {
        return { type: todoConstants.EDIT_TODO_SUCCESS, payload };
    }
    function failure(error) {
        return { type: todoConstants.EDIT_TODO_FAILURE, error };
    }
}

function deleteTodo(todoId) {
    return (dispatch, getState) => {
        dispatch(request());

        todoService.deleteTodo(getState().user.user.id, todoId).then(
            response => {
                dispatch(success(response));
            },
            error => {
                dispatch(failure(error));
            }
        );
    };

    function request() {
        return { type: todoConstants.DELETE_TODO_REQUEST };
    }
    function success(payload) {
        return { type: todoConstants.DELETE_TODO_SUCCESS, payload };
    }
    function failure(error) {
        return { type: todoConstants.DELETE_TODO_FAILURE, error };
    }
}

function uploadFile(todoId, formData) {
    return (dispatch, getState) => {
        dispatch(request());

        todoService.uploadFile(getState().user.user.id, todoId, formData).then(
            response => {
                dispatch(success(response));
            },
            error => {
                dispatch(failure(error));
            }
        );
    };

    function request() {
        return { type: todoConstants.UPLOAD_FILE_REQUEST };
    }
    function success(payload) {
        return { type: todoConstants.UPLOAD_FILE_SUCCESS, payload };
    }
    function failure(error) {
        return { type: todoConstants.UPLOAD_FILE_FAILURE, error };
    }
}

function toggleShowArchived() {
    return {
        type: todoConstants.TOGGLE_SHOWARCHIVED
    };
}
