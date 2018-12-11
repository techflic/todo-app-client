import { userConstants } from "../constants/actionTypes";
import { history } from "./../../commons/helpers/history";
import { userService } from "./../../services/user.service";

export const userActions = {
    login,
    logout,
    register
};

function login(username, password) {
    return (dispatch, getState) => {
        dispatch(request({ username }));

        userService.login(username, password).then(
            response => {
                dispatch(success(response));
                history.push("/");
            },
            error => {
                dispatch(failure(error));
            }
        );
    };

    function request(username) {
        return { type: userConstants.LOGIN_REQUEST };
    }
    function success(payload) {
        return { type: userConstants.LOGIN_SUCCESS, payload };
    }
    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error };
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return (dispatch, getState) => {
        dispatch(request(user));

        userService.register(user).then(
            response => {
                dispatch(success(response));
                history.push("/login");
            },
            error => {
                dispatch(failure(error));
            }
        );
    };

    function request(user) {
        return { type: userConstants.REGISTER_REQUEST };
    }
    function success(payload) {
        return { type: userConstants.REGISTER_SUCCESS, payload };
    }
    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, error };
    }
}
