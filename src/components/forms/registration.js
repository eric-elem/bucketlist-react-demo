import React, { Component } from 'react';

export default class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            password_rpt: ""
        }
    }
    onInputChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        });
    }
    submitUserDetails = event => {
        event.preventDefault();
        this.props.registerUser(this.state);
    }
    render () {
        return (
            <form onSubmit={this.submitUserDetails}>
                <input type="text"
                    className="form-control mb-1"
                    placeholder="Full name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onInputChange}
                    required/>
                <input type="text"
                    className="form-control mb-1"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onInputChange}
                    required/>
                <input type="password"
                    className="form-control mb-1"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onInputChange}
                    required/>
                <input className="form-control mb-2"
                    type="password"
                    name="password_rpt"
                    placeholder="Repeat password"
                    value={this.state.password_rpt}
                    onChange={this.onInputChange}
                    required/>
                <button className="btn btn-primary col-md-12"
                    type="submit">
                    Submit
                </button>
            </form>
        );
    }
}
