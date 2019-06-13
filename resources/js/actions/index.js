import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';
export const FORGOT_PASSWORD_REQUEST = 'forgot_password_request';
export const FORGOT_PASSWORD_ERROR = 'forgot_password_error';
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
                console.log(res.data);
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

export function forgotPasswordAction({ email }) {
    return dispatch => {
        axios
            .post(`${URL}/api/password/create`, {
                email,
            })
            .then(res => {
                dispatch({ type: FORGOT_PASSWORD_REQUEST, payload: res });
            })
            .catch(error => {
                dispatch({
                    type: FORGOT_PASSWORD_ERROR,
                    payload: error.response,
                });
            });
    };
}

export function passwordResetAction({ email, password, token }) {
    return dispatch => {
        axios
            .post(`${URL}/api/password/reset`, {
                email,
                password,
                token,
            })
            .then(res => {
                console.log(res);
                dispatch({ type: PASSWORD_RESET_REQUEST, payload: res });
            })
            .catch(error => {
                console.log(error);
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
