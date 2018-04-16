import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";
import './App.css';
import axios from 'axios'
import { Link } from 'react-router-dom';


import UserPage from './components/UserPage';
import ComicPage from './components/ComicPage'
import Header from './components/Header';
import Footer from './components/Footer';
import CreateForm from './components/CreateForm';
import CreateComment from './components/CreateComment';
import Comments from './components/Comments';
import DeleteButton from './components/DeleteButton';
import EditForm from './components/EditForm';
import UploadForm from './components/UploadForm';
import UserSignInPage from './components/UserSignInPage';
import LogIn from "./components/LogIn";






injectGlobal`
@import url("https://fonts.googleapis.com/css?family=Bungee+Shade")
`

/* button {
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
`;  */

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    // const childProps = {
    //   isAuthenticated: this.state.isAuthenticated,
    //   userHasAuthenticated: this.userHasAuthenticated
    // };
    
    return (

      <div>
        <Router>

          <Switch>
            <Route exact path='/' component={UserPage} />
            <Route exact path='/users' component={UserSignInPage} />
            <Route exact path='/users/comics/:userId'  component={ComicPage} />
           
            {/* <Route exact path='/user/comics/' component={ComicPage} /> */}
          </Switch>

        </Router>
      </div>
    );
  }
}





export default App;
