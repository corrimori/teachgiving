import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Table } from 'semantic-ui-react';
import DashboardTable from '../DashboardTable';

import {
  Button,
  Container,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
} from 'semantic-ui-react';

let baseURL = 'http://localhost:3032';
let user = localStorage.getItem('user');

class DashboardPage extends Component {
  state = {
    selectedKidsId: '',
    pledgesByKid: [],
  };

  // :id need to be added in
  componentDidMount = async () => {
    const response = await fetch(`${baseURL}/users/2/kids`);
    let pledgesJson = await response.json();
    this.setState({ pledgesByKid: pledgesJson });
    console.log('pledges by Kid loaded...');
    this.state.pledgesByKid;
  };

  render() {
    // console.log('props kid name', this.props.kid.name);
    console.log('props - Dashboard Page ------>>', this.props);
    // console.log('props kid ------>>', this.props.kid);

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
          <DashboardTable pledgesByKid={this.state.pledgesByKid} />
        </div>
      </div>
    );
  }
} //component close bracket

export default DashboardPage;
