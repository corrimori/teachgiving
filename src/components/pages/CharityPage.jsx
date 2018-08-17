import React, { Component } from 'react';
import CharityList from '../CharityList.jsx'
import PledgeForm from '../PledgeForm'
import { Link } from 'react-router-dom';
import '../../App.css';
import {
  Container,
  Header,
  Menu,
  Responsive,
  Segment
} from 'semantic-ui-react'
import { getAllCharities } from '../../services/api'


class CharityPage extends Component {
  state = {
    allCharities: [],
    selectedCharityId: ""
  }

  updateSelectedCharity = (selectedCharityId) => {
    console.log("selected charity updated to: ", selectedCharityId)
    this.setState({"selectedCharityId": selectedCharityId})
  }

// connect to api
  componentDidMount = async () => {
    let charitiesJson = await getAllCharities()
    this.setState({allCharities: charitiesJson})
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
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as='a'>Why Give?</Menu.Item>
            <Menu.Item as='a' active>Charities</Menu.Item>
            <Menu.Item as='a'>Donate Dashboard</Menu.Item>
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
              updateSelectedCharity={this.updateSelectedCharity}
            />
          </div>
        </div>

        <div className="PledgeAmount-container">
          <PledgeForm
            selectedCharityId={this.state.selectedCharityId} />
        </div>
      </div>
    );
  }
}

export default CharityPage
