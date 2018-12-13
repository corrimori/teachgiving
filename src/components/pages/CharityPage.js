import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharityList from '../CharityList.js';
import PledgeForm from '../PledgeForm';
import '../../App.css';
import { Container, Menu, Segment } from 'semantic-ui-react';
// import { getAllCharities } from '../../services/api';

let BaseURL = 'http://localhost:3032';

class CharityPage extends Component {
  state = {
    allCharities: [],
    selectedCharityId: '',
  };

  updateSelectedCharity = selectedCharityId => {
    console.log('selected charity updated to: ', selectedCharityId);
    this.setState({ selectedCharityId: selectedCharityId });
  };

  // connect to api - Get all charities
  componentDidMount = async () => {
    const response = await fetch(`${BaseURL}/charities`);
    let charitiesJson = await response.json();
    this.setState({ allCharities: charitiesJson });
    console.log('all charities loaded...', this.state.allCharities);
  };

  render() {
    const { fixed } = this.state;

    const wrap = {
      paddingTop: '1px',
      margin: '5em',
      display: 'flex',
      alignItems: 'flex-start',
      alignContent: 'center',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
    };

    return (
      <div className="Charity">
        {/* NAVIGATION at top */}
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 30,
            padding: '1em 0em',
            backgroundColor: 'green',
          }}
          vertical>
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large">
            <Container style={{ margin: 0 }}>
              <Menu.Item as={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/kids">
                Kids
              </Menu.Item>
              <Menu.Item as={Link} to="/charities" active>
                Charities
              </Menu.Item>
              <Menu.Item as={Link} to="/dashboard">
                Donate Dashboard
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>

        <div>
          <h1 style={{ marginTop: '40px', color: 'black' }}>
            Choose a charity and start giving!
          </h1>

          <div style={wrap}>
            <CharityList
              allCharities={this.state.allCharities}
              updateSelectedCharity={this.updateSelectedCharity}
            />
          </div>
        </div>

        <div className="PledgeAmount-container">
          <PledgeForm selectedCharityId={this.state.selectedCharityId} />
        </div>
      </div>
    );
  }
}

export default CharityPage;
