import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CharityCard = props => (
  <Card>
    <Image src={props.charityImage} />
    <Card.Content>
      <Card.Header>{props.charityName}</Card.Header>
      <Card.Meta>95.47 Rating</Card.Meta>
      <Card.Description>{props.charityDescription}</Card.Description>
    </Card.Content>
  </Card>
);

export default CharityCard;
