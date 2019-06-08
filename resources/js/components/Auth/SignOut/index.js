import React, { Component } from "react";
import { signOutAction } from "../../../actions";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class SignOut extends Component {
    constructor(props) {
        super(props);

        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut() {
        this.props.signOutAction();
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

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default connect(
    mapStateToProps,
    { signOutAction }
)(SignOut);
