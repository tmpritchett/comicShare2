import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";
import './App.css';

import UserPage from './components/userpage'
import Header from './components/header'
import Footer from './components/footer'

injectGlobal`
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon")


class App extends Component {
  render() {
    return (

      <div> 
      <UserPage/>
      <HeaderWrapper/>
        </div>

button {
  padding: 10px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    align-items: center;
}
button:hover {
    background-color: red;
    color: blue;
}
`;





export default App;
