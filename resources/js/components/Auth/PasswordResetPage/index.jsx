/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-array-index-key */

/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { isEmpty } from 'lodash';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { passwordResetAction } from '../../../actions';

class PasswordResetPage extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        // this.renderMessage = this.renderMessage.bind(this);
    }

    submit(values) {
        const { passwordResetAction, history } = this.props;

        passwordResetAction(values, history);
    }

    renderMessage() {
        const { response } = this.props;
        console.log(response);
        if (response.message) {
            return (
                <div className="alert alert-warning">{response.message}</div>
            );
        }

        if (response.id) {
            return (
                <div className="alert alert-warning">
                    You password was successfully changed
                </div>
            );
        }

        return null;
    }

    render() {
        const { handleSubmit, response } = this.props;

        return (
            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Reset Password</div>

                            <div className="card-body">
                                {response !== '' && this.renderMessage()}

                                <form onSubmit={handleSubmit(this.submit)}>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="email"
                                            className="col-md-4 col-form-label text-md-right"
                                        >
                                            E-Mail Address
                                        </label>

                                        <div className="col-md-6">
                                            <Field
                                                id="email"
                                                name="email"
                                                component="input"
                                                type="email"
                                                className="form-control"
                                                required
                                                autoComplete="email"
                                                value="something@something.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label
                                            className="col-md-4 col-form-label text-md-right"
                                            htmlFor="password"
                                        >
                                            New Password
                                        </label>
                                        <div className="col-md-6">
                                            <Field
                                                id="password"
                                                name="password"
                                                component="input"
                                                type="password"
                                                placeholder="Password"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Reset Password
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

PasswordResetPage.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    response: PropTypes.shape({
        created_at: PropTypes.string,
        email: PropTypes.string,
        email_verified_at: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string,
        updated_at: PropTypes.string,
    }),
    handleSubmit: PropTypes.func.isRequired,
    passwordResetAction: PropTypes.func.isRequired,
};

PasswordResetPage.defaultProps = {
    response: {},
};

function mapStateToProps(state) {
    const urlParams = new URLSearchParams(window.location.search);

    return {
        response: state.auth.response,
        initialValues: {
            email: urlParams.has('email') && urlParams.get('email'),
            token: urlParams.has('reset_token') && urlParams.get('reset_token'),
        },
    };
}

const reduxFormRegister = reduxForm({
    form: 'passwordReset',
    enableReinitialize: true,
})(PasswordResetPage);

export default connect(
    mapStateToProps,
    { passwordResetAction },
)(reduxFormRegister);
