import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandPage from './components/pages/LandPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import CharityPage from './components/pages/CharityPage';
import DashboardPage from './components/pages/DashboardPage';
import KidsPage from './components/pages/KidsPage';
import baseURL from './env';
import './App.css';

// let baseURL = 'http://localhost:3032';

class App extends Component {
  // get user list with GET request, set State
  state = {
    kid: null,
    allKids: [],
  };

  componentDidMount = async () => {
    // if there is a user, fetch kids
    try {
      console.log('in kids page...');
      const response = await fetch(`${baseURL}/users/2/kids`);
      const kidsJson = await response.json();
      console.log('kidsJson>>>', kidsJson);
      this.setState({ allKids: kidsJson });
    } catch (error) {
      console.warn(error);
    }
  };

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

  setKid = kid => {
    console.log('kid', kid);
    this.setState({ kid });
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

          <Route
            path="/charities"
            exact
            component={() => (
              <CharityPage kid={this.state.kid} allKids={this.state.allKids} />
            )}
          />

          <Route
            path="/dashboard"
            exact
            component={() => (
              <DashboardPage
                kid={this.state.kid}
                allKids={this.state.allKids}
              />
            )}
          />

          <Route
            path="/kids"
            exact
            component={() => <KidsPage onSelect={this.setKid} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

// <Route path="/signup" exact component={SignUpPage} />
// <Route path="/login" exact component={LoginPage} />
