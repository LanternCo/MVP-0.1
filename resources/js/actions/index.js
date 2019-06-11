import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

const URL = window.location.origin;

export function signInAction({ email, password }, history) {
    return async dispatch => {
        try {
            const res = await axios.post(`${URL}/api/login`, {
                email,
                password,
            });
            dispatch({ type: AUTHENTICATED });
            localStorage.setItem('user', res.data.token);
            // @todo - change to redirect to dashboard
            history.push('/');
        } catch (error) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid email or password',
            });
        }
    };
}

export function signOutAction() {
    console.log('signout');
    localStorage.clear();
    return {
        type: UNAUTHENTICATED,
    };
}
