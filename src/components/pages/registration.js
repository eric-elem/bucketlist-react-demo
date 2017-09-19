import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RegistrationForm from '../forms/registration';
import Logo from '../logo';
import LineWithText from '../line-with-text';
import Message from '../message';
import Footer from '../footer';

export default class RegistrationPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            registered: false,
            alertClass: null,
            message: null,
        };
    }
    registerUser = (newUserDetails) => {
        this.setState({
            alertClass: 'alert-info',
            message: 'Trying to register...'
        });
        fetch("https://erics-bucketlist-api.herokuapp.com/auth/register",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(newUserDetails)
        })
        .then(result => result.json())
        .then(data => {
            if(data.status == "Error") {
                this.setState({
                    alertClass: 'alert-danger',
                    message: data.message
                });
            } else {
                this.setState({
                    registered: true,
                    alertClass: 'alert-success',
                    message: data.message
                });
            }
        })
    }
    render () {
        if(this.state.registered) {
            return <Redirect to={{pathname:'/login', data:{state:this.state}}}/>
        }
        return (
            <div className="col-sm-10 col-md-6 col-lg-4 offset-sm-1 offset-md-3 offset-lg-4">
                <div className="card mt-5">
                    <div className="card-block">
                        <Logo />
                        <p className="slogan text-center mb-4">Record and track your goals </p>
                        <LineWithText lineText="REGISTER"/>
                        {this.state.message != null &&
                            <Message alertClass={this.state.alertClass}
                                message={this.state.message}/>
                        }
                        <RegistrationForm registerUser={this.registerUser} />
                        <p className="slogan text-center mt-3">
                            By signing up, you agree to our<br/>
                            <b>Terms & Privacy Policy</b>
                        </p>
                    </div>
                </div>
                <Footer message="Have an account? " link="/login" linkText="Log in"/>
            </div>
        );
    }
}