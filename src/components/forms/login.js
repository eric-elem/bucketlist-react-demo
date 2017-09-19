import React, { Component } from 'react';

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onInputChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        });
    }
    submitUserCredentials = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state);        
    }
    render () {
        return (
            <form onSubmit={this.submitUserCredentials}>
                <input type="text"
                    className="form-control mb-1"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onInputChange}
                    required/>
                <input className="form-control mb-2"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onInputChange}
                    placeholder="Password"
                    required/>
                <button className="btn btn-primary col-md-12"
                    type="submit">
                        Submit
                </button>
            </form>
        );
    }
}
