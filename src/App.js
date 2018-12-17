import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandPage from './components/pages/LandPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import CharityPage from './components/pages/CharityPage';
import DashboardPage from './components/pages/DashboardPage';
import KidsPage from './components/pages/KidsPage';
// ******* ADD other import pages here **********

import './App.css';

let baseURL = 'http://localhost:3032';

class App extends Component {
  // get user list with GET request, set State
  getUsers = async () => {
    const response = await fetch(`${baseURL}/users`);
    const usersJSON = await response.json();
    this.setState({ users: usersJSON });
  };

  createUser = async payload => {
    console.log('in createUser...');
    console.log('createUser payload>>', payload);
    fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(async response => {
      console.log('new user added ...');
      console.log('responseJson>>>', await response.json());
      // this.fetchKidsForUser(payload.id);
    });
  };

  login = async payload => {
    console.log('in login...');
    console.log('user Data >> payload >> ***********', payload);
    console.log('string payload>>>>', JSON.stringify(payload));
    fetch(`${baseURL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(async response => {
      console.log('&&&&&&&&&&&&&&&&&&&&&&&');
      console.log(await response.headers.get('authentication'));
      console.log('responsejson>>>', await response.json());
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
              <LoginPage {...routeProps} login={this.login} />
            )}
          />
          <Route
            path="/signup"
            render={routeProps => (
              <SignUpPage {...routeProps} createUser={this.createUser} />
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

// <Route path="/signup" exact component={SignUpPage} />
// <Route path="/login" exact component={LoginPage} />
