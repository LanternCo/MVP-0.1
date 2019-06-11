import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="bg-light">
                {/* @QUESTION: Do we have a copyright? */}
                <div className="footer-copyright text-center text-dark py-2">
                    © 2019 Copyright
                </div>
            </footer>
        );
    }
}

export default Footer;
