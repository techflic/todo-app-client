import { todoConstants } from "./../constants/actionTypes";

const _INITIAL_STATE = {
    showArchived: false
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
                error: null
            };
        case todoConstants.GET_TODO_FAILURE:
            return {
                ...state,
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
                todos: action.payload.data,
                error: null
            };
        case todoConstants.CREATE_TODO_FAILURE:
            return {
                ...state,
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
                error: null
            };
        case todoConstants.EDIT_TODO_FAILURE:
            return {
                ...state,
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
                error: null
            };
        case todoConstants.DELETE_TODO_FAILURE:
            return {
                ...state,
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
                error: null
            };
        case todoConstants.UPLOAD_FILE_FAILURE:
            return {
                ...state,
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
