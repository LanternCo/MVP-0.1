/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-array-index-key */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { registerAction } from '../../../actions';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.errorMessage = this.errorMessage.bind(this);
    }

    submit(values) {
        const { registerAction, history } = this.props;

        registerAction(values, history);
    }

    errorMessage() {
        const { errorMessage } = this.props;

        if (errorMessage) {
            return <div className="info-red">{errorMessage}</div>;
        }

        return null;
    }

    render() {
        const { handleSubmit, errorMessage } = this.props;

        return (
            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {!isEmpty(errorMessage) &&
                            errorMessage.data.errors.length !== 0 && (
                                <div className="alert alert-warning alert-dismissible fade show">
                                    <p>We had a problem!</p>
                                    {errorMessage.data.errors.map(
                                        (error, i) => (
                                            <span key={i}>{error}</span>
                                        ),
                                    )}
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="alert"
                                    >
                                        &times;
                                    </button>
                                </div>
                            )}
                        <div className="card">
                            <div className="card-header">Register</div>

                            <div className="card-body">
                                <form onSubmit={handleSubmit(this.submit)}>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="name"
                                            className="col-md-4 col-form-label text-md-right"
                                        >
                                            Name
                                        </label>

                                        <div className="col-md-6">
                                            <Field
                                                id="name"
                                                name="name"
                                                component="input"
                                                type="text"
                                                className="form-control"
                                                required
                                                autoComplete="name"
                                            />
                                        </div>
                                    </div>

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
                                                autoComplete="name"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label
                                            htmlFor="password"
                                            className="col-md-4 col-form-label text-md-right"
                                        >
                                            Password
                                        </label>

                                        <div className="col-md-6">
                                            <Field
                                                id="password"
                                                name="password"
                                                component="input"
                                                type="password"
                                                className="form-control"
                                                required
                                                autoComplete="new-password"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Register
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

RegisterPage.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    errorMessage: PropTypes.shape({
        data: PropTypes.shape({
            errors: PropTypes.array,
        }),
        status: PropTypes.number,
    }),
    handleSubmit: PropTypes.func.isRequired,
    registerAction: PropTypes.func.isRequired,
};

RegisterPage.defaultProps = {
    errorMessage: {},
};

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

const reduxFormRegister = reduxForm({
    form: 'register',
})(RegisterPage);

export default connect(
    mapStateToProps,
    { registerAction },
)(reduxFormRegister);
