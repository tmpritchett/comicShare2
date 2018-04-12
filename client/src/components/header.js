import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class header extends Component {
    render() {
        return (
           <div>
            <HeaderWrapper>
               <h1>Comic Share</h1>
               <Link style={{ textDecoration: 'none' }} to="/">
               <h3>Sign In</h3>
               </Link>
            </HeaderWrapper>
            </div>
        );
    }
}

const HeaderWrapper = styled.div`
 width: 100%;
  padding: 8px;
  background: red;
  color: blue;
  text-align: right;
  text-shadow: 1px 1px white;
  font-family:  'Do Hyeon', sans-serif;
  font-size: 28px;

h1{
    font-family: 'Do Hyeon', sans-serif;
    font-size: 52px;
    text-shadow: 1px 2px white;
    color: blue;
}
h3{
    color:blue;
}

`;



export default header;
