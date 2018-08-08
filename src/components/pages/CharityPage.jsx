import React, { Component } from 'react';
import Charities from '../Charities'
import PledgeAmount from '../PledgeAmount'
import CharityList from './CharityList.jsx'
import '../../App.css';

const apiUrl = 'http://localhost:3001'

class CharityPage extends Component {
  state = {
    allCharities: [],
    charityNames: []
  }

  // async componentDidMount() {
  //   const response = await fetch(apiUrl + '/charities')
  //   const json = await response.json()
  //   this.setState({Charities: json})
  // }

  // getAllCharities = async () => {
  //   const charityJson = await
  //   fetch(apiUrl + '/charities')
  //   let charity = await charityJson.json()
  // }

// connect to backend
  componentDidMount = async () => {
    await this.getAllCharities()
  }

// loading messages from the server
  getAllCharities = async () => {
// fetch charityJson
    const charityJson = await fetch( apiUrl + 'charities' )
    let allCharities = await charityJson.json()
    let charityNames = allCharities.map(charity => charity.name)
    charityNames = [...new Set(charityNames)]
    this.setState({
      allCharities,
      charityNames,
    })
  }


  render() {
    const { allCharities } = this.setState

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
