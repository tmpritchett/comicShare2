import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import styled from 'styled-components';
import axios from 'axios';
import { Auth } from "aws-amplify";

const TextStyle = styled.div`
font-family: 'Bungee Shade', cursive;
text-align: center;
font-size: 25px;

`


const LogInWrapper = styled.div`
    @media all and (min-width: 480px) {
  .Login {
    padding: 45px;
    color: #751817;
    text-align: left;

  }
 .Login form {
    margin-right: 50px;
    margin-left: 750px;
    max-width: 320px;
    padding: 45px;
    margin-top: -50px;
  } 
}
    `

class LogIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <LogInWrapper>
                <div>
                    <div className="Login">
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="email" bsSize="large">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            <Button
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                    <TextStyle>
                        <h1> Comic Share </h1>
                    </TextStyle>
                </div>
            </LogInWrapper>
        );
    }
}


export default LogIn;
