import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";
import './App.css';
import axios from 'axios'

import UserPage from './components/UserPage';
import ComicPage from './components/ComicPage'
import Header from './components/Header';
import Footer from './components/Footer';
import Comments from './components/Comments';



injectGlobal`
@import url (<link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet">)



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
    background-color: Black;
    color: white;
} 
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={UserPage} />
            <Route exact path='/comics' component={ComicPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}





export default App;
