import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

class Header extends Component {
    render() {
        return (
          
            <HeaderWrapper>
                <div>
               <h1>Comic Share</h1>
               </div>
            
               <div>
               <Link style={{ textDecoration: 'none' }} to="/comics">
                <h3>Enter</h3>
               </Link>
               </div>
            </HeaderWrapper>

            
        );
    }
}

const HeaderWrapper = styled.div`
width: 100%;
height: 90px;
position: fixed;
padding: 0;
margin: 0;
top: 0;
left: 0;
background-color: rgba(87, 41, 41, 0.75);
/* color: #222B4A;
text-align: center;
font-family:  'Fredoka One', cursive;
font-size: 20px; */
h1{
font-family: 'Bungee Shade', cursive;
text-align: center;
font-size: 25px;

}
/* h3{
   /* font-family: 'Fredoka One', cursive; */
   font-size: 25px;
   color: #222B4A;
   text-align: right;
 } */
`
 



export default Header;
