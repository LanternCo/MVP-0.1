/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
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
        const { handleSubmit, errorMessage } = this.props;

        return (
            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {!isEmpty(errorMessage) && (
                            <div className="alert alert-warning alert-dismissible fade show">
                                {errorMessage.data}
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
                            <div className="card-header">Login</div>

                            <div className="card-body">
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
                                                type="text"
                                                placeholder="Email"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label
                                            className="col-md-4 col-form-label text-md-right"
                                            htmlFor="password"
                                        >
                                            Password
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

                                    {/* <div className="form-group row">
                                    <div className="col-md-6 offset-md-4">
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label className="form-check-label" for="remember">
                                    {{ __('Remember Me') }}
                                    </label>
                                    </div>
                                    </div>
                                    </div> */}

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Sign In
                                            </button>

                                            <a
                                                className="btn btn-link"
                                                href="/forgotpassword"
                                            >
                                                Forgot Your Password?
                                            </a>
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

LoginPage.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    errorMessage: PropTypes.shape({
        data: PropTypes.string,
        status: PropTypes.number,
    }),
    handleSubmit: PropTypes.func.isRequired,
    signInAction: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
    errorMessage: {},
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
