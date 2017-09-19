import React, { Component } from 'react';
import '../static/style/line-with-text.css'

export default class LineWithText extends Component {
    render () {
        return (
            <div className="line-with-text font-weight-bold mb-4">
                <div className="line"></div>
                <div className="line-text">{this.props.lineText}</div>
                <div className="line"></div>
            </div>
        );
    }
}