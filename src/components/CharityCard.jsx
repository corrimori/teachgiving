import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'
import CharityPage from './pages/CharityPage'

import img from '../img/dog.jpg';
import img2 from '../img/SFFoodBank.png'
import img3 from '../img/GGP.jpg'

const CharityCard = () => (

  <Card.Group itemsPerRow={3}>

    <Card>
      <Image src={img} />
      <Card.Content>
        <Card.Header>San Francisco SPCA</Card.Header>
        <Card.Meta>95.47 Rating</Card.Meta>
        <Card.Description>The San Francisco SPCA is dedicated to saving, protecting, caring, and advocating for animals. </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src={img2} />
      <Card.Content>
        <Card.Header>San Francisco Food Bank</Card.Header>
        <Card.Meta>92.20 Rating</Card.Meta>
        <Card.Description>SF Food Bank mission is to end hunger, envisioning a community where everyone is able to obtain enough nutritious food to support the health and well-being of themselves and their families.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src={img3} />
      <Card.Content>
        <Card.Header>Golden Gate National Parks Conservancy</Card.Header>
        <Card.Meta>93.20 Rating</Card.Meta>
        <Card.Description>A nonprofit organization created to preserve the Golden Gate National Parks, enhance the experiences of visitors, and build a community dedicated to conserving the parks for the future. </Card.Description>
      </Card.Content>
    </Card>

  </Card.Group>
)

export default CharityCard
