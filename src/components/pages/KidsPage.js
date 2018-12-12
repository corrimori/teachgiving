import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
} from 'semantic-ui-react'


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
          <Menu.Item as='a'>Home</Menu.Item>
          <Menu.Item as='a'>About</Menu.Item>
          <Menu.Item as='a' active>Why Give?</Menu.Item>
          <Menu.Item as='a'>Donate Today</Menu.Item>
        </Container>
      </Menu>
    </Segment>

    <div className="Kids">
      <h2 style={{marginTop: '20px'}}>
        Welcome to kids page!
      </h2>

      <div style = { wrap }>
        <AvatarList
          allAvatars={this.state.allAvatars}
        />
      </div>
    </div>

  </div>
);
