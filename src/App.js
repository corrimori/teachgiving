import React, { Component } from 'react';
import './App.css';

import Charities from './components/Charities'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          Choose a charity and start giving!
        </p>
        <Charities />
      </div>
    );
  }
}

export default App
