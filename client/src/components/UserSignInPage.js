import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";

const SignInWrapper = styled.div`
    background-image: url('https://i.imgur.com/Y2v2YFR.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow: scroll;
`

class UserSignInPage extends Component {
    render() {
        return (
            
            <SignInWrapper>
            <div>
               
               <LogIn/>
        
            </div>
            </SignInWrapper>
        );
    }
}

export default UserSignInPage;
