import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import LoginPage from "./Auth/LoginPage";
import RegisterPage from "./Auth/RegisterPage";
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Navigation appName={this.props.name} />
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route path="/signin" component={LoginPage} />
                            {/* <Route path="/secret" component={SecretPage} /> */}
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

if (document.getElementById("app")) {
    const appElement = document.getElementById("app");
    const appName = appElement.getAttribute("data-app-name");
    ReactDOM.render(<App name={appName} />, appElement);
}
