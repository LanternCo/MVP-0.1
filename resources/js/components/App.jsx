/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Footer from './Footer';

const App = props => {
    const { name } = props;

    return (
        <BrowserRouter>
            <div>
                <Navigation appName={name} />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

App.propTypes = {
    name: PropTypes.string,
};

App.defaultProps = {
    name: 'Lantern',
};

if (document.getElementById('app')) {
    const appElement = document.getElementById('app');
    const appName = appElement.getAttribute('data-app-name');
    ReactDOM.render(<App name={appName} />, appElement);
}
