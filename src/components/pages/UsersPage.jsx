import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const apiUrl = 'http://localhost:3000';
const eventsUrl = apiUrl + '/charities';
// const apiUrl = herokuapp.com to deploy OR change to localhost/3000 to use locally


const UsersPage = () => (

  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("In charities component!")

    fetch('/charities', {
      method: 'GET'
    })

    .then((response) => {
      return response.json()
    })

    .then((Users) => {
      console.log(Users)
      // represents success
      // DOM manipulation

      let ul = document.getElementById('userlist')
      for( user of Users ) {
        let li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)
      }

    })
  })

export default UsersPage

==================