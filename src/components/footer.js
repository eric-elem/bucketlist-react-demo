import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render () {
        return (
            <div className="card mt-2">
                <div className="card-block">
                    <p className="card-text text-center small-text">
                        {this.props.message} 
                        <Link to={this.props.link} 
                            className="card-link">
                                {this.props.linkText}
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
}