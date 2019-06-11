/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAction } from '../../../actions';

class SignOut extends Component {
    constructor(props) {
        super(props);

        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut() {
        const { signOutAction } = this.props;
        signOutAction();
    }

    render() {
        return (
            <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="#"
            >
                <div className="nav-signout" onClick={this.handleSignOut}>
                    Sign Out
                </div>
            </NavLink>
        );
    }
}

SignOut.propTypes = {
    signOutAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default connect(
    mapStateToProps,
    { signOutAction },
)(SignOut);
