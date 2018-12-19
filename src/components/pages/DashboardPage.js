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
    pledgesByKids: [
      {
        id: 5,
        name: 'Moose',
        user_id: 2,
        avatarImage: 'koala.png',
        runningTotal: 0,
        pledges: [
          {
            id: 3,
            kid_id: 5,
            charity_id: 3,
            pledgeAmount: 0.25,
            numOfWeeks: 2,
            name: 'San Francisco - Marin Food Bank',
            description:
              'A nonprofit organization created to preserve the Golden Gate National Parks, enhance the experiences of visitors, and build a community dedicated to conserving the parks for the future.',
            url: 'https://www.sfmfoodbank.org/',
            image_path: 'images/SFFoodBank.png',
          },
          {
            id: 4,
            kid_id: 5,
            charity_id: 4,
            pledgeAmount: 0.5,
            numOfWeeks: 4,
            name: 'Hamilton Families',
            description:
              'The mission is to end family homelessness in the San Francisco Bay Area.',
            url: 'https://hamiltonfamilies.org/',
            image_path: 'images/hamilton.png',
          },
        ],
      },
      {
        id: 7,
        name: 'Reggie',
        user_id: 2,
        avatarImage: 'wolf.png',
        runningTotal: 0,
        pledges: [
          {
            id: 2,
            kid_id: 7,
            charity_id: 2,
            pledgeAmount: 1,
            numOfWeeks: 4,
            name: 'San Francisco SPCA',
            description:
              'SF Food Bank mission is to end hunger, envisioning a community where everyone is able to obtain enough nutritious food to support the health and well-being of themselves and their families.',
            url: 'https://www.sfspca.org/',
            image_path: 'images/dog.jpg',
          },
          {
            id: 4,
            kid_id: 7,
            charity_id: 4,
            pledgeAmount: 0.25,
            numOfWeeks: 2,
            name: 'Hamilton Families',
            description:
              'The mission is to end family homelessness in the San Francisco Bay Area.',
            url: 'https://hamiltonfamilies.org/',
            image_path: 'images/hamilton.png',
          },
        ],
      },
    ],
  };

  // :id need to be added in
  componentDidMount = async () => {
    const response = await fetch(`${baseURL}/users/2/kids`);
    let pledgesJson = await response.json();
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
          <DashboardTable pledgesByKids={this.state.pledgesByKids} />
        </div>
      </div>
    );
  }
} //component close bracket

export default DashboardPage;
