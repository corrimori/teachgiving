import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandPage from './components/pages/LandPage'
import LoginPage from './components/pages/LoginPage'
import CharityPage from './components/pages/CharityPage'
import DashboardPage from './components/pages/DashboardPage'
// ******* ADD other import pages here **********

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component = { LandPage } />
          <Route path="/login" exact component = { LoginPage }/>
          <Route path="/charities" exact component = { CharityPage } />
          <Route path="/dashboard" exact component = { DashboardPage }/>
        </Switch>
      </div>
    );
  }
}

export default App;
