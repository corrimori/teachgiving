import React, { Component } from "react"
import { Card, Image } from 'semantic-ui-react'
import CharityCard from './CharityCard'
import CharityList from './CharityList'

class Charities extends Component {

  render() {
    return (
      <div>
        <CharityCard />
      </div>
    )
  }
}

export default Charities
