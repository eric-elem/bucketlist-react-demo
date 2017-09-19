import React, { Component } from 'react';

export default class Message extends Component {
    render () {
        return (
            <div className={`message alert text-center ${this.props.alertClass}`}
                role="alert">
                    {this.props.message}
            </div>
        );
    }
}