import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashboardTable from '../DashboardTable';
import baseURL from '../../env';
import { Container, Menu, Segment } from 'semantic-ui-react';

// let baseURL = 'http://localhost:3032';
let user = localStorage.getItem('user');

class DashboardPage extends Component {
  state = {
    selectedKidsId: '',
  };

  // :id need to be added in
  componentDidMount = async () => {
    const response = await fetch(`${baseURL}/users/2/kids`);
    const pledgesJson = await response.json();
    // this.setState({ pledgesByKids: pledgesJson });
    console.log('CDM=======>> pledgesByKids');
  };

  render() {
    // console.log('props kid name', this.props.kid.name);
    // console.log('props - Dashboard Page ------>>', this.props);
    console.log('state pledges by kids ------>>', this.state.pledgesByKids);

    const { fixed } = this.state;

    const wrap = {
      paddingTop: '1px',
      margin: '5em',
      alignContent: 'center',
      maxWidth: '800px',
    };

    return (
      <div>
        {/* NAVIGATION at top */}
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 30,
            padding: '1em 0em',
            backgroundColor: 'green',
          }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container style={{ margin: 0 }}>
              <Menu.Item as={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/kids">
                Kids
              </Menu.Item>
              <Menu.Item as={Link} to="/charities">
                Charities
              </Menu.Item>
              <Menu.Item as={Link} to="/dashboard" active>
                Donate Dashboard
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>

        <div>
          <h2 style={{ marginTop: '40px' }}>{`Welcome ${user}!`}</h2>
        </div>
        <div style={wrap}>
          <DashboardTable pledgesByKids={this.props.allKids} />
        </div>
      </div>
    );
  }
} //component close bracket

export default DashboardPage;
