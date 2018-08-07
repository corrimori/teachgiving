import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandPage from './components/pages/LandPage'
import CharityPage from './components/pages/CharityPage'
// ******* ADD other import pages here **********

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component = { LandPage } />
          <Route path="/charities" exact component = { CharityPage } />
        </Switch>
      </div>
    );
  }
}

export default App;

//
// <Route path="/" exact component = { HomePage } />
// <Route path="/kids" exact component = { KidsPage } />
// <Route path="/charities" exact component = { CharityPage } />
// <Route path="/results" exact component = { ResultsPage } />
