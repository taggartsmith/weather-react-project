import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Weathercall from './weathercall';
import Home from './pages/home';
import Header from './header/header';



export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Weather' component={Weathercall}/>
          </Switch>

        </div>
      </Router>

    );
  }
}
