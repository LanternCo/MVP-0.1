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
import { forgotPasswordAction } from '../../../actions';

class ForgotPasswordPage extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
    }

    submit(values) {
        const { forgotPasswordAction, history } = this.props;

        forgotPasswordAction(values, history);
    }

    renderMessage() {
        const { message } = this.props;

        if (message) {
            return <div className="alert alert-warning">{message}</div>;
        }

        return null;
    }

    render() {
        const { handleSubmit, message } = this.props;

        return (
            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Forgot your password? No worries!
                            </div>

                            <div className="card-body">
                                {message !== '' && this.renderMessage()}

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

ForgotPasswordPage.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    message: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    forgotPasswordAction: PropTypes.func.isRequired,
};

ForgotPasswordPage.defaultProps = {
    message: '',
};

function mapStateToProps(state) {
    return { message: state.auth.message };
}

const reduxFormRegister = reduxForm({
    form: 'forgotPassword',
})(ForgotPasswordPage);

export default connect(
    mapStateToProps,
    { forgotPasswordAction },
)(reduxFormRegister);
