import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAction } from '../../../actions';

const SignOut = () => (
    <NavLink className="nav-item nav-link" activeClassName="active" to="#">
        <div
            className="nav-signout"
            onClick={signOutAction}
            onKeyDown={signOutAction}
            role="button"
            tabIndex={0}
        >
            Sign Out
        </div>
    </NavLink>
);

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default connect(
    mapStateToProps,
    { signOutAction },
)(SignOut);
