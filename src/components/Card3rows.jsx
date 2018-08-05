import React from 'react'
import { Card } from 'semantic-ui-react'
import src from './dog.jpg';

const Card3rows = () => (
  <Card.Group itemsPerRow={3}>
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
  </Card.Group>
)

export default Card3rows 
