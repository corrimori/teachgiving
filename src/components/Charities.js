import React, { Component } from "react"
import { Card, Image } from 'semantic-ui-react'
import CharityCard from './CharityCard'
import Card3rows from './Card3rows'

class Charities extends Component {

  render() {
    return (
      <div>
        <CharityCard style="display: inline" />
        <CharityCard style="display: inline" />
        <Card3rows />
      </div>
    )
  }
}

export default Charities
