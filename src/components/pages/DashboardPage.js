import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import { chart } from 'chart'
// import { Card, Icon, Image } from 'semantic-ui-react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

class DashboardPage extends Component {
  state = {
    selectedKidsId: '',
  };

  render() {
    const { fixed } = this.state;

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
          <h2 style={{ marginTop: '40px' }}>Welcome Corrine!</h2>
        </div>
      </div>
    );
  }
  //component close bracket
}

export default DashboardPage;

//this is the fetch to collect ALL from PLEDGE route from 1 user
// getPledgeInfo = async () => {
//   console.log('pledgeInfo befor fetch ************', pledgeInfo)
//   const pledgeInfoJSON = await fetch('http://localhost:3003/pledges')
//   let pledgeInfo = await pledgeInfoJSON.json()
//   console.log(pledgeInfo,"<<<<pledgeInfo after fetch");
//   this.setState({
//     pledgeInfo,
//   })
// }
