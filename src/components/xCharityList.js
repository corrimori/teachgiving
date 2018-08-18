import React from 'react'
import CharityCard from './CharityCard'
// grabbing state and now have access to it. USE PROPS

const CharityList = props => {
  return ()
  console.log('In Charity List = props', props)
  <Card>
    <Image src='./img/GGP.jpg' />
      <Card.Content>
        <Card.Header>Golden Gate National Parks Conservancy</Card.Header>
        <Card.Meta>Rating: 93.5%</Card.Meta>
        <Card.Description>The San Francisco SPCA is dedicated to saving, protecting, caring, and advocating for animals.</Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src='./img/dog.jpg' />
        <Card.Content>
          <Card.Header>San Francisco SPCA</Card.Header>
          <Card.Meta>Rating: 94.2%</Card.Meta>
          <Card.Description>SF Food Bank mission is to end hunger, envisioning a community where everyone is able to obtain enough nutritious food to support the health and well-being of themselves and their families.</Card.Description>
        </Card.Content>
      </Card>
}

export default CharityList
