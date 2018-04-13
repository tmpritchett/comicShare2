import React, { Component } from 'react';
import styled from "styled-components";
import Header from "./Header"

const UserPageWrapper = styled.div`
    background-image: url("https://i.imgur.com/1foZYsx.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    align-items: center;
    height: 100vh;
    width: 100vw;
  `

class UserPage extends Component {
    render() {
        return (
            <div>
            <Header />
               <UserPageWrapper/> 
               
            </div>
        );
    }
}


export default UserPage;
