import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import SignOut from '../Auth/SignOut';

class Navigation extends Component {
    navbarLinks() {
        const { authenticated } = this.props;

        if (authenticated) {
            return [
                <li key="secret" className="nav-item">
                    <NavLink
                        className="nav-item nav-link"
                        activeClassName="active"
                        to="/secret"
                    >
                        Secret
                    </NavLink>
                </li>,
                <li key="signout" className="nav-item">
                    <SignOut />
                </li>,
            ];
        }
        return [
            <li key="signin" className="nav-item">
                <NavLink
                    className="nav-item nav-link"
                    activeClassName="active"
                    to="/signin"
                >
                    Sign in
                </NavLink>
            </li>,
            <li key="signup" className="nav-item">
                <NavLink
                    className="nav-item nav-link"
                    activeClassName="active"
                    to="/register"
                >
                    Sign up
                </NavLink>
            </li>,
        ];
    }

    render() {
        const { appName } = this.props;

        return (
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        {appName}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {/* Left Side Of Navbar */}
                        <ul className="navbar-nav mr-auto"></ul>

                        {/* Right Side Of Navbar */}
                        <ul
                            className="navbar-nav ml-auto"
                            id="navbarSupportedContent"
                        >
                            {this.navbarLinks()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Navigation.propTypes = {
    appName: PropTypes.string,
    authenticated: PropTypes.bool,
};

Navigation.defaultProps = {
    appName: '',
    authenticated: false,
};

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
    };
}

export default connect(mapStateToProps)(Navigation);
