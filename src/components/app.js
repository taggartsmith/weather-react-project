import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Weathercall from './weathercall';
import Home from './pages/home';
import Header from './header/header';
import Slider from './pages/slider';
import NoMatch from './pages/no-match';



export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/weather' component={Weathercall}/>
            <Route path='/pictures' component={Slider}/>
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router>

    );
  }
}
