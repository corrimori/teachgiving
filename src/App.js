import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandPage from './components/pages/LandPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import CharityPage from './components/pages/CharityPage';
import DashboardPage from './components/pages/DashboardPage';
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

  // take this.state.messages (mapping thru) and
  // return array of ids and pass as parameter to method
  toggleStarred = async message => {
    console.log('in toggle Starred...');
    let payload = {
      messageIds: [message.id],
      command: 'star',
      star: !message.starred,
    };

    const response = await fetch(`${BaseURL}/api/messages`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    message.starred = !message.starred;
    const messages = [...this.state.messages];

    // const message = await response.json();
    this.setState({ messages });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/charities" exact component={CharityPage} />
          <Route path="/dashboard" exact component={DashboardPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
