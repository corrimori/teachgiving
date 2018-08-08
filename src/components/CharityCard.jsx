import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import img from '../img/dog.jpg';
// import img2 from '../img/SFFoodBank.png'
// import img3 from '../img/GGP.jpg'

const CharityCard = (props) => (
    <Card>
      <Image src={img} />
      <Card.Content>
        <Card.Header>{ props.charityName }</Card.Header>
        <Card.Meta>95.47 Rating</Card.Meta>
        <Card.Description>{ props.charityDescription }</Card.Description>
      </Card.Content>
    </Card>
)

export default CharityCard
