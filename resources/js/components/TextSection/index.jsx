import React from 'react';
import PropTypes from 'prop-types';

// Should we allow the user to pass in type of heading. Or is this more of a container block
// const TextSection = (props) => {
const TextSection = props => {
    const { title, body } = props;

    return (
        <div className="container p-5 display-linebreak">
            <h1 className="text-center text-dark font-weight-bold">{title}</h1>
            <p className="text-center text-dark">{body}</p>
        </div>
    );
};

TextSection.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

TextSection.defaultProps = {
    title: '',
    body: '',
};

export default TextSection;
