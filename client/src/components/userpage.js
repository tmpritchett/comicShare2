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
    /* margin-top: -35px;
    margin-bottom: -35px; */
    
  `

const TextStyle = styled.div`
  font-family: 'Bungee Shade', cursive;
  text-align: center;
  font-size: 25px;
  /* margin-top: -950px; */
  margin-left: 80px;
  /* margin-bottom: -100px; */

  `

const LinkWrapper = styled.div`
  text-align: center;
  `

class UserPage extends Component {
    render() {
        return (

            <UserPageWrapper>
                <div>

                    <TextStyle>
                        <h1> Comic Share </h1>
                    </TextStyle>

                    <LinkWrapper>
                        <div>
                            <Link style={{ textDecoration: 'none' }} to="/user">
                                <h3>Enter</h3>
                            </Link>
                        </div>
                    </LinkWrapper>

                </div>
            </UserPageWrapper>

        );
    }
}


export default UserPage;



