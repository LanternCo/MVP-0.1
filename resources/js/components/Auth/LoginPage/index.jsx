/* eslint-disable no-shadow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signInAction } from '../../../actions';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.errorMessage = this.errorMessage.bind(this);
    }

    submit(values) {
        const { signInAction, history } = this.props;

        signInAction(values, history);
    }

    errorMessage() {
        const { errorMessage } = this.props;

        if (errorMessage) {
            return <div className="info-red">{errorMessage}</div>;
        }

        return null;
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="form">
                <div className="container">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit(this.submit)}>
                        <Field
                            name="email"
                            component="input"
                            type="text"
                            placeholder="Email"
                        />
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            placeholder="Password"
                        />
                        <button type="submit" className="blue">
                            Sign In
                        </button>
                    </form>
                    {this.errorMessage()}
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    errorMessage: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    signInAction: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
    errorMessage: '',
};

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

const reduxFormSignin = reduxForm({
    form: 'signin',
})(LoginPage);

export default connect(
    mapStateToProps,
    { signInAction },
)(reduxFormSignin);
