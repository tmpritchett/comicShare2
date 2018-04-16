import React, { Component } from 'react';
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import { Link } from "react-router-dom";



const UserPageWrapper = styled.div`
    background-image: url("https://i.imgur.com/1foZYsx.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    align-items: center;
    height: 100vh;
    width: 100vw;
    margin-top: -35px; 
    margin-bottom: -35px;
    
    
  `

const TextStyle = styled.div`
  font-family: 'Bungee Shade', cursive;
  text-align: center;
  font-size: 25px;
  margin-left: 80px;
  color: #572725
 text-shadow: 2px 2px black;

  `

const LinkWrapper = styled.div`
  text-align: center;
  color: white;
  
  `
// const YouTubeWrapper = styled.div`

// `
class UserPage extends Component {
    render() {
        return (

            <UserPageWrapper>
                <div>

                    <TextStyle>
                        <h1> Comic Share </h1>
                    </TextStyle>

                    
                <div>
                <LinkWrapper>
                        <div>
                            <Link style={{ textDecoration: 'none' }} to="/users">
                                <h3>Enter</h3>
                            </Link>
                        </div>
                    </LinkWrapper>
             </div>
             </div>
               
            </UserPageWrapper>

        );
    }
}


export default UserPage;



