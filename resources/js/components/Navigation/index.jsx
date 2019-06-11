import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    navbarLinks() {
        const { authenticated } = this.props;

        if (authenticated) {
            return [
                <li key="secret" className="nav-item">
                    <Link to="/secret" className="nav-link">
                        Secret
                    </Link>
                </li>,
                <li key="signout" className="nav-item">
                    <Link to="/signout" className="nav-link">
                        Sign out
                    </Link>
                </li>,
            ];
        }
        return [
            <li key="signin" className="nav-item">
                <Link to="/signin" className="nav-link">
                    Sign in
                </Link>
            </li>,
            <li key="signup" className="nav-item">
                <Link to="/signup" className="nav-link">
                    Sign up
                </Link>
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
