import { userConstants } from "../constants/actionTypes";

let user = JSON.parse(localStorage.getItem("user"));
const INITIAL_STATE = user ? { loggedIn: true, user } : {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
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
                error: action.error
            };

        case userConstants.LOGOUT:
            return {};

        case userConstants.REGISTER_REQUEST:
            return {
                ...state,
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
                error: action.error
            };

        default:
            return { ...state };
    }
};
