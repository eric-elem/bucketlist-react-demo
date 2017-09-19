import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from '../forms/login';
import Logo from '../logo';
import LineWithText from '../line-with-text';
import Footer from '../footer';
import Message from '../message';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("isLoggedIn") === null) {
            localStorage.setItem("isLoggedIn", "false");
        }
        if(this.props.location.data!=null){
            this.state = {
                message: this.props.location.data.state.message,
                alertClass: this.props.location.data.state.alertClass
            }
        }else {
            this.state = {
                message: null,
                alertClass: null
            }
        }
    }
    loginUser = (userCredentials) => {
        this.setState({
            alertClass: 'alert-info',
            message: 'Trying to login...'
        });
        fetch("https://erics-bucketlist-api.herokuapp.com/auth/login",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(userCredentials)
        })
        .then(result=>result.json())
        .then(data=> {
            if(data.status == "Error"){
                this.setState({
                    alertClass: 'alert-danger',
                    message: data.message
                });
            } else{
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', userCredentials.username);
                localStorage.setItem("isLoggedIn", "true");
                this.setState({
                    alertClass: '',
                    message: ''
                });
            }
        })
    }
    render () {
        if(localStorage.getItem("isLoggedIn") === "true") {
            return <Redirect to="/dashboard"/>
        }
        return (
            <div className="col-sm-10 col-md-6 col-lg-4 offset-sm-1 offset-md-3 offset-lg-4">
                <div className="card mt-5">
                    <div className="card-block">
                        <Logo />
                        <LineWithText lineText="LOGIN"/>
                        {this.state.message != null &&
                            <Message alertClass={this.state.alertClass}
                                message={this.state.message} />
                        }
                        <LoginForm loginUser={this.loginUser}/>
                        <p className="small-text text-center mt-3">
                                Resolve password issues 
                            <Link to="/reset-password" className="card-link"> here</Link>
                        </p>
                    </div>
                </div>
                <Footer message="Don't have an account? " link="/register" linkText="Register"/>
            </div>
        );
    }
}