import React, { Component } from 'react';

export default class Bucket extends Component {
    constructor (props) {
        super(props);
    }
    updateActiveBucket = event => {
        event.preventDefault();
        this.props.setActiveBucket(this.props.bucket);
    }
    render(){
        return(
            <a href="#" onClick={this.updateActiveBucket}
                className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.bucket.title}</h5>
                    <small className="text-muted">{this.props.bucket.id}</small>
                </div>
                <p className="mb-1">{this.props.bucket.description}</p>
            </a>
        );
    }
}