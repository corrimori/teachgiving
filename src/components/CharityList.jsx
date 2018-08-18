import React from 'react'
import CharityCard from './CharityCard'
// grabbing state and now have access to it. USE PROPS

const CharityList = props => {
  console.log('In Charity List = props', props)
  return props.allCharities.map(charity =>
    <CharityCard
      key={charity.id}
      charityName={charity.name}
      charityDescription={charity.description}
      charityImage={charity.image_path}
      onClick={() => console.log("######### clicked charity")}
    />
  )
}

export default CharityList

// load image from public folder
// http://localhost:3000/images/kitten.jpg
