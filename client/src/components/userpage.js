import React, { Component } from 'react';
import styled from "styled-components";



class UserPage extends Component {
    render() {
        return (
            <div>
               <UserPageWrapper/> 
               
            </div>
        );
    }
}
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

export default UserPage;
