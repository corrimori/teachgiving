import React from 'react'
import { Card, Image } from 'semantic-ui-react'

// import img2 from '../img/SFFoodBank.png'
// import img3 from '../img/GGP.jpg'

const CharityCard = (props) => (
    <Card>
      <Image src={ props.charityImage } />
      <Card.Content>
        <Card.Header>{ props.charityName }</Card.Header>
        <Card.Meta>95.47 Rating</Card.Meta>
        <Card.Description>{ props.charityDescription }</Card.Description>
      </Card.Content>
    </Card>
)

export default CharityCard


      // <Image src=http:localhost:3000/images/GGP.jpg />


// const CharityCard = (props) => (
//     <Card>
//       <Image src={ props.charityImage } />
//       <Card.Content>
//         <Card.Header>{ props.charityName }</Card.Header>
//         <Card.Meta>95.47 Rating</Card.Meta>
//         <Card.Description>{ props.charityDescription }</Card.Description>
//       </Card.Content>
//     </Card>
// )
