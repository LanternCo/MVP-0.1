import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import articlesReducer from './articles_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    articles: articlesReducer,
});

export default rootReducer;
