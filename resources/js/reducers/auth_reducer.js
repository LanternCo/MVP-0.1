/* eslint-disable default-case */
import {
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTHENTICATION_ERROR,
    FORGOT_PASSWORD_REQUEST,
    PASSWORD_RESET_REQUEST,
} from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case AUTHENTICATED:
            return { ...state, authenticated: true };
        case UNAUTHENTICATED:
            return { ...state, authenticated: false };
        case AUTHENTICATION_ERROR:
            return { ...state, error: action.payload };
        case FORGOT_PASSWORD_REQUEST:
            return { ...state, message: action.payload.data.message };
        case PASSWORD_RESET_REQUEST:
            return { ...state, response: action.payload.data };
    }

    return state;
}
