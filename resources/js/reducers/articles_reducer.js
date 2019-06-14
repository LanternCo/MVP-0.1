/* eslint-disable default-case */
import { SET_ARTICLE_DETAILS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case SET_ARTICLE_DETAILS:
            return { ...state, articles: action.payload.data };
    }

    return state;
}
