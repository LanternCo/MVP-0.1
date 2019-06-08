import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import SignOut from "../Auth/SignOut"
class Navigation extends Component {
    navbarLinks() {
        if (this.props.authenticated) {
            return <SignOut />;
        }

        return [
            <li key="signin" className="nav-item">
                <NavLink to="/signin" className="nav-link">
                    Sign in
                </NavLink>
            </li>,
            <li key="signup" className="nav-item">
                <NavLink to="#" className="nav-link">
                    Sign up
                </NavLink>
            </li>
        ];
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        {this.props.appName}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="{{ __('Toggle navigation') }}"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ml-auto">
                            {this.navbarLinks()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Navigation.propTypes = {
    appName: PropTypes.string
};

Navigation.defaultProps = {
    appName: "Lantern"
};

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Navigation);
