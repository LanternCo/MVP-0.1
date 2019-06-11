import React from 'react';
import PropTypes from 'prop-types';

const Navigation = props => (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
            {/* @TODO - get app name from props */}
            <a className="navbar-brand" href="/">
                {props.appName}
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

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item">
                    <a className="nav-link" href="/faq">FAQ</a>
                </li> */}
                    {/* <!-- Authentication Links --> */}
                    {/* @guest
                    <li className="nav-item">
                        <a className="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                    </li>
                    @if (Route::has('register'))
                        <li className="nav-item">
                            <a className="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                        </li>
                    @endif
                @else
                    <li className="nav-item dropdown">
                        <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }} <span className="caret"></span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </li>
                @endguest */}
                </ul>
            </div>
        </div>
    </nav>
);

Navigation.propTypes = {
    appName: PropTypes.string,
};

Navigation.defaultProps = {
    appName: 'Lantern',
};

export default Navigation;
