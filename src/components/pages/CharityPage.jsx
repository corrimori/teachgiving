import React, { Component } from 'react';
import CharityList from '../CharityList.jsx'
import PledgeForm from '../PledgeForm'
import '../../App.css';
import {
  Container,
  Header,
  Menu,
  Responsive,
  Segment
} from 'semantic-ui-react'

const baseUrl = 'http://localhost:3003'

class CharityPage extends Component {
  state = {
    allCharities: [],
    allPledges: [],
  }

  // function to update the state currentPledges
  updateCurrentPledge = () => {
    console.log('currentPledge');
  }

// connect to api
  componentDidMount = async () => {
    await this.getAllCharities()
  }

// loading messages from the server
  getAllCharities = async () => {
// fetch charityJson
    const allCharities = await fetch( baseUrl + '/charities' )
    let charitiesJson = await allCharities.json()
    this.setState({allCharities: charitiesJson})
  }

  // loading messages from the server
  getAllPledges = async () => {
  // fetch charityJson
    const allPledges = await fetch( baseUrl + '/pledges' )
    let pledgesJson = await allPledges.json()
    this.setState({allPledges: pledgesJson})
  }

  render() {
    const { fixed } = this.state

    const wrap = {
      margin: 65,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignContent: 'center',
    }

    return (

      <div>
      {/* NAVIGATION at top */}
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 30, padding: '1em 0em', backgroundColor: "green" }}
        vertical
      >
        <Menu
          fixed={fixed ? 'top' : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size='large'
        >
          <Container style={{margin: 0}}>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>About</Menu.Item>
            <Menu.Item as='a' active>Why Give?</Menu.Item>
            <Menu.Item as='a'>Donate Today</Menu.Item>
          </Container>
        </Menu>
      </Segment>

        <div className="App">
          <h2 style={{marginTop: '20px'}}>
            Choose a charity and start giving!
          </h2>

          <div style = { wrap }>
            <CharityList
              allCharities={this.state.allCharities}
            />
          </div>
        </div>

        <div className="PledgeAmount-container">
          <PledgeForm
            updateCurrentPledge={this.updateCurrentPledge}
            allPledges={this.state.allPledges}/>
        </div>
      </div>
    );
  }
}

export default CharityPage
