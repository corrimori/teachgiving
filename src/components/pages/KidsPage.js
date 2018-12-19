import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
// import PropTypes from 'prop-types';
import { Container, Menu, Segment } from 'semantic-ui-react';
import Kid from '../Kid';
import baseURL from '../../env';
// import { baseURL } from '../../App';

// let baseURL = 'http://localhost:3032';

// get all kids from user
class KidsPage extends Component {
  state = {
    allKids: [],
    kidsOfUser: [],
    selectedKidId: '',
  };

  // get user id from Login

  // connect to api - Get all kids for User
  // let id = 2;
  // const response = await fetch(`${baseURL}/:id/kids`);

  componentDidMount = async () => {
    try {
      console.log('in kids page...');
      const response = await fetch(`${baseURL}/users/2/kids`);
      const kidsJson = await response.json();
      console.log('kidsJson>>>', kidsJson);
      this.setState({ allKids: kidsJson });
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    console.log('props', this.props);
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
          <div className="Kids-names" align="center">
            {this.state.allKids.map(kid => (
              <Kid
                key={kid.id}
                kid={kid}
                avatarImage={kid.avatarImage}
                name={kid.name}
                onSelect={this.props.onSelect}
              />
            ))}
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

// key={{indexOf(kid)}}
