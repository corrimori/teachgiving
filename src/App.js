import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandPage from './components/pages/LandPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import CharityPage from './components/pages/CharityPage';
import DashboardPage from './components/pages/DashboardPage';
import KidsPage from './components/pages/KidsPage';
// ******* ADD other import pages here **********

import './App.css';

let BaseURL = 'http://localhost:3032';

class App extends Component {
  // get user list with GET request, set State
  getUsers = async () => {
    const response = await fetch(`${BaseURL}/users`);
    const usersJSON = await response.json();
    this.setState({ users: usersJSON });
  };

  createNewUser = async userData => {
    console.log('in createNewUser...');
    console.log('user Data ***********', userData);
    fetch(`${BaseURL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: userData.username,
        hashpass: userData.hashpass,
      }),
    }).then(() => {
      console.log('new user added ...');
      // this.fetchKidsForUser(userData.id);
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandPage} />
          <Route
            path="/login"
            render={routeProps => (
              <LoginPage {...routeProps} createNewUser={this.createNewUser} />
            )}
          />
          <Route
            path="/signup"
            render={routeProps => (
              <SignupPage {...routeProps} createNewUser={this.createNewUser} />
            )}
          />
          <Route path="/charities" exact component={CharityPage} />
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route path="/kids" exact component={KidsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

// <Route path="/signup" exact component={SignupPage} />
// <Route path="/login" exact component={LoginPage} />
