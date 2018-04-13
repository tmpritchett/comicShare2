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


class App extends Component {
  render() {
    return (

      <div>
        <Router>

          <Switch>
            <Route exact path='/' component={UserPage} />

            <Route exact path='/comics/:userId' component={ComicPage} />
          </Switch>

        </Router>
      </div>
    );
  }
}





export default App;
