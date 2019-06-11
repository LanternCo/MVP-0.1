import React from 'react';
import PropTypes from 'prop-types';

const Navigation = props => {
    const { appName } = props;

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                {/* @TODO - get app name from props */}
                <a className="navbar-brand" href="/">
                    {appName}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}"
                >
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
        </nav>
    );
};

Navigation.propTypes = {
    appName: PropTypes.string,
};

Navigation.defaultProps = {
    appName: 'Lantern',
};

export default Navigation;
