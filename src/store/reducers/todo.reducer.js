import { todoConstants } from "./../constants/actionTypes";

const _INITIAL_STATE = {
    showArchived: false,
    error: null,
    requestingTodo: false,
    creatingTodo: false,
    editingTodo: false,
    deleting: false,
    uploading: false
};

export default (state = _INITIAL_STATE, action) => {
    switch (action.type) {
        case todoConstants.GET_TODO_REQUEST:
            return {
                ...state,
                requestingTodo: true
            };
        case todoConstants.GET_TODO_SUCCESS:
            return {
                ...state,
                requestingTodo: false,
                todos: action.payload.data,
            };
        case todoConstants.GET_TODO_FAILURE:
            return {
                ...state,
                requestingTodo: false,
                error: action.error
            };

        case todoConstants.CREATE_TODO_REQUEST:
            return {
                ...state,
                creatingTodo: true
            };
        case todoConstants.CREATE_TODO_SUCCESS:
            return {
                ...state,
                creatingTodo: false,
                showArchived: false,
                todos: action.payload.data,
            };
        case todoConstants.CREATE_TODO_FAILURE:
            return {
                ...state,
                creatingTodo: false,
                error: action.error
            };

        case todoConstants.EDIT_TODO_REQUEST:
            return {
                ...state,
                editingTodo: true
            };
        case todoConstants.EDIT_TODO_SUCCESS:
            return {
                ...state,
                editingTodo: false,
                todos: action.payload.data,
            };
        case todoConstants.EDIT_TODO_FAILURE:
            return {
                ...state,
                editingTodo: false,
                error: action.error
            };

        case todoConstants.DELETE_TODO_REQUEST:
            return {
                ...state,
                deleting: true
            };
        case todoConstants.DELETE_TODO_SUCCESS:
            return {
                ...state,
                deleting: false,
                todos: action.payload.data,
            };
        case todoConstants.DELETE_TODO_FAILURE:
            return {
                ...state,
                deleting: false,
                error: action.error
            };

        case todoConstants.UPLOAD_FILE_REQUEST:
            return {
                ...state,
                uploading: true
            };
        case todoConstants.UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                uploading: false,
                todos: action.payload.data,
            };
        case todoConstants.UPLOAD_FILE_FAILURE:
            return {
                ...state,
                uploading: false,
                error: action.error
            };

        case todoConstants.TOGGLE_SHOWARCHIVED:
            return {
                ...state,
                showArchived: !state.showArchived
            }

        default:
            return { ...state };
    }
};
