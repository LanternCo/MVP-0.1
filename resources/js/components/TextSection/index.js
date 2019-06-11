import React, { Component } from 'react';

// Should we allow the user to pass in type of heading. Or is this more of a container block
// const TextSection = (props) => {
class TextSection extends Component {
    render() {
        return (
            <div className="container p-5 display-linebreak">
                <h1 className="text-center text-dark font-weight-bold">
                    {this.props.title}
                </h1>
                <p className="text-center text-dark">{this.props.body}</p>
            </div>
        );
    }
}

export default TextSection;
