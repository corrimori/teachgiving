import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Table } from 'semantic-ui-react';

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
    const tableWrap = {
      margin: '5em',
      align: 'center',
      maxWidth: '650px',
    };
    // console.log('props kid name', this.props.kid.name);
    console.log('props - Dashboard Page ------>>', this.props);
    // console.log('props kid ------>>', this.props.kid);

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
          <h2 style={{ marginTop: '40px' }}>{`Welcome ${user}!`}</h2>
        </div>

        <Table celled striped style={tableWrap}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Icon name="child" />Betty
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name="money" />
              </Table.Cell>
              <Table.Cell>SPCA</Table.Cell>
              <Table.Cell>.35</Table.Cell>
              <Table.Cell collapsing textAlign="right">
                2 weeks
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name="money" />
              </Table.Cell>
              <Table.Cell>Hamilton Families</Table.Cell>
              <Table.Cell>.10</Table.Cell>
              <Table.Cell collapsing textAlign="right">
                3 weeks
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name="money" />
              </Table.Cell>
              <Table.Cell>SF Food Bank</Table.Cell>
              <Table.Cell>.50</Table.Cell>
              <Table.Cell collapsing textAlign="right">
                5 weeks
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
} //component close bracket

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
