import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import PropTypes from 'prop-types';
import {
  Item,
  Button,
  Card,
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

class KidsPage extends Component {
  state = {
    allKids: [],
    selectedKidId: '',
  };

  componentDidMount = async () => {
    console.log('in kids page...');
    // fetch kids from user with id
    // set state
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
      <Image src="../../public/images/avatar/fox.png" size="medium" circular />
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
          <h2 style={{ marginTop: '40px' }}>Who is giving today?</h2>

          <div>
            <Item.Group relaxed="very">
              <Item>
                <Item.Image
                  size="small"
                  src="../../../public/images/avatar/fox.png"
                />

                <Item.Content verticalAlign="middle">
                  <Item.Header as="a">kid 1</Item.Header>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size="small" src="/images/wireframe/image.png" />

                <Item.Content verticalAlign="middle">
                  <Item.Header as="a">kid 2</Item.Header>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size="small" src="/images/wireframe/image.png" />

                <Item.Content verticalAlign="middle">
                  <Item.Header as="a">kid 3</Item.Header>
                </Item.Content>
              </Item>
            </Item.Group>

            {/* <AvatarList allAvatars={this.state.allAvatars} />

            <Image
              src="../../public/images/avatar/fox.png"
              size="medium"
              circular
            />

            src="../../public/images/avatar/fox.png"

            */}
          </div>
        </div>
      </div>
    );
  }
}

export default KidsPage;
