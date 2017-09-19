import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    logoutUser = event => {
        event.preventDefault();
        this.props.logoutUser();
    }
    render () {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to='/dashboard' className="navbar-brand logo"><h3>Bucketlist</h3></Link>
            
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <div className="nav-link">
                                Welcome { localStorage.getItem("username") }
                                <span className="sr-only">(current)</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.logoutUser}>Logout</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
          </nav>
        );
    }
}