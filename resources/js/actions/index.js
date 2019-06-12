import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';
export const PASSWORD_RESET_REQUEST = 'password_reset_request';
export const PASSWORD_RESET_ERROR = 'password_reset_error';

const URL = window.location.origin;

export function signInAction({ email, password }, history) {
    return dispatch => {
        axios
            .post(`${URL}/api/login`, {
                email,
                password,
            })
            .then(res => {
                dispatch({ type: AUTHENTICATED, payload: res });
                localStorage.setItem('user', res.data.token);
                history.push('/');
            })
            .catch(error => {
                dispatch({
                    type: AUTHENTICATION_ERROR,
                    payload: error.response,
                });
            });
    };
}

export function registerAction({ name, email, password }, history) {
    return dispatch => {
        axios
            .post(`${URL}/api/register`, {
                name,
                email,
                password,
            })
            .then(res => {
                dispatch({ type: AUTHENTICATED, payload: res });
                localStorage.setItem('user', res.data.token);
                history.push('/');
            })
            .catch(error => {
                dispatch({
                    type: AUTHENTICATION_ERROR,
                    payload: error.response,
                });
            });
    };
}

export function passwordResetAction({ email }, history) {
    return dispatch => {
        axios
            .post(`${URL}/api/password/create`, {
                email,
            })
            .then(res => {
                dispatch({ type: PASSWORD_RESET_REQUEST, payload: res });
            })
            .catch(error => {
                dispatch({
                    type: PASSWORD_RESET_ERROR,
                    payload: error.response,
                });
            });
    };
}

export function signOutAction() {
    localStorage.clear();
    return {
        type: UNAUTHENTICATED,
    };
}
