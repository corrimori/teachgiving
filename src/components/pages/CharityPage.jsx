import React, { Component } from 'react';
import CharityList from '../CharityList.jsx'
import PledgeAmount from '../PledgeAmount'
import '../../App.css';

const apiUrl = 'http://localhost:3003'

class CharityPage extends Component {
  state = {
    allCharities: [],
  }

// connect to backend
  componentDidMount = async () => {
    await this.getAllCharities()
  }

// loading messages from the server
  getAllCharities = async () => {
// fetch charityJson
    const allCharities = await fetch( apiUrl + '/charities' )
    let charitiesJson = await allCharities.json()
    this.setState({allCharities: charitiesJson})
  }


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
            <CharityList
              allCharities={this.state.allCharities}
            />
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
