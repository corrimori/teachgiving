import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import PropTypes from 'prop-types';
import { Item, Card, Container, Image, Menu, Segment } from 'semantic-ui-react';
// import { baseURL } from '../../App';

let baseURL = 'http://localhost:3032';

// get all kids from user
class KidsPage extends Component {
  state = {
    allKids: [],
    kidsOfUser: [],
    selectedKidId: '',
  };

  // get user id from Login

  // connect to api - Get all kids for User
  componentDidMount = async () => {
    console.log('in kids page...');
    // let id = 2;
    // const response = await fetch(`${baseURL}/:id/kids`);
    const response = await fetch(`${baseURL}/users/2/kids`);
    let kidsJson = await response.json();
    console.log('kidsJson>>>', kidsJson);
    this.setState({ allKids: kidsJson });
    console.log('kids loaded... ');
    console.log('allKids>>>>>', this.state.allKids);
    // put kids into an array
    let kidsOfUser = [];
    this.state.allKids.map(kid => {
      console.log('kid>>', kid);
      console.log('kidName>>', kid.kidName);
      kidsOfUser.push(kid.kidName);
    });
    console.log('kidsOfUser--------->>', kidsOfUser);
    this.setState({ kidsOfUser });
    console.log('kidsOfUser>>', this.state.kidsOfUser);
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

    const ImageExampleCircular = () => (
      <Image src="/foxImg.png" size="medium" circular />
    );

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
              <Menu.Item as={Link} to="/kids" active>
                Kids
              </Menu.Item>
              <Menu.Item as={Link} to="/charities">
                Charities
              </Menu.Item>
              <Menu.Item as={Link} to="/dashboard">
                Donate Dashboard
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>

        <div className="Kids">
          <h1 style={{ marginTop: '40px' }}>Who is giving today?</h1>

          <div className="Kids-names large-row-spacer" align="center">
            <Link to="/charities">
              <Image src="images/avatar/panda.png" size="small" circular />
              <h2>Felix</h2>
            </Link>
            <Link to="/charities">
              <Image src="images/avatar/wolf.png" size="small" circular />
              <h2>Lauren</h2>
            </Link>
            <Link to="/charities">
              <Image
                align="center"
                src="images/avatar/koala.png"
                size="small"
                circular
              />
              <h2>Lucy</h2>
            </Link>
            <p className="message">
              Add or Edit a child?{' '}
              <Link to="/charities">Create a new child</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default KidsPage;
