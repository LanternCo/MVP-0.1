/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export default function(ComposedComponent) {
    class Authentication extends Component {
        // PropTypes = {
        //     router: PropTypes.object,
        //     authenticated: PropTypes.bool,
        //     history: PropTypes.object,
        // };

        componentWillMount() {
            const { authenticated, history } = this.props;

            if (!authenticated) {
                history.push('/signin');
            }
        }

        componentWillUpdate(nextProps) {
            const { history } = this.props;

            if (!nextProps.authenticated) {
                history.push('/signin');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}
