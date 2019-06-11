/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Footer from './Footer';
import LoginPage from './Auth/LoginPage';
// import RegisterPage from "./Auth/RegisterPage";
import SignOut from './Auth/SignOut';
import reducers from '../reducers';
import { AUTHENTICATED } from '../actions';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const user = localStorage.getItem('user');

if (user) {
    store.dispatch({ type: AUTHENTICATED });
}

const App = props => {
    const { name } = props;

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Navigation appName={name} />
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/signin" component={LoginPage} />
                        <Route path="/signout" component={SignOut} />
                        {/* <Route path="/secret" component={SecretPage} /> */}
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        </Provider>
    );
};

App.propTypes = {
    name: PropTypes.string,
};

App.defaultProps = {
    name: '',
};

if (document.getElementById('app')) {
    const appElement = document.getElementById('app');
    const appName = appElement.getAttribute('data-app-name');
    ReactDOM.render(<App name={appName} />, appElement);
}
