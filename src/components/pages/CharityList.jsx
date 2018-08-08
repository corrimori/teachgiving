import React, { Component } from 'react'
import Charities from '../Charities'
// grabbing state and now have access to it. USE PROPS

const CharityList = props => {
  console.log('In Charity List = props', props)
  console.log("printing allCharities", props.allCharities)
  return props.allCharities.map(event =>
    <CharityList
      key={allCharities.id}
      allCharities={allCharities}
      charityName={props.charityName}
      charityDescription={props.charityDescription}
    />
  )
}

export default CharityList
