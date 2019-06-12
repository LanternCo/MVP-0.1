/* eslint-disable default-case */
import {
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTHENTICATION_ERROR,
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
        case PASSWORD_RESET_REQUEST:
            return { ...state, message: action.payload.data.message };
    }

    return state;
}
