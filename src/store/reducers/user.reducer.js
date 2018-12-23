import { userConstants } from "../constants";

let user = JSON.parse(localStorage.getItem("user"));
const INITIAL_STATE = user ? { loggedIn: true, user } : {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                error: null,
                loggingIn: true
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                user: action.payload.data,
                error: null
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.error
            };

        case userConstants.LOGOUT:
            return {};

        case userConstants.REGISTER_REQUEST:
            return {
                ...state,
                error: null,
                registering: true
            };
        case userConstants.REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                registered: true,
                registeredUser: action.payload.data,
                error: null
            };
        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                error: action.error
            };

        default:
            return { ...state };
    }
};
