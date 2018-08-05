import React, { Component } from 'react';
import './App.css';

import Charities from './components/Charities'
import PledgeAmount from './components/PledgeAmount'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome</h1>
          </header>
          <p className="App-intro">
            Choose a charity and start giving!
          </p>
          <div className="App-container">
            <Charities />
          </div>
        </div>

        <div className="PledgeAmount-container">
          <PledgeAmount />
        </div>
      </div>
    );
  }
}

export default App
