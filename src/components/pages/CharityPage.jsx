import React, { Component } from 'react';
import Charities from '../Charities'
import PledgeAmount from '../PledgeAmount'
import '../../App.css';

class CharityPage extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Charities</h1>
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

export default CharityPage
