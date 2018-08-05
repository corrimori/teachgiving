import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import img from './dog.jpg';

const CharityCard = () => (
  <Card>
    <Image src={img} />
    <Card.Content>
      <Card.Header>San Francisco SPCA</Card.Header>
      <Card.Meta>95.47 Rating</Card.Meta>
      <Card.Description>The San Francisco SPCA is dedicated to saving, protecting, caring, and advocating for animals. </Card.Description>
    </Card.Content>
  </Card>
)

export default CharityCard
