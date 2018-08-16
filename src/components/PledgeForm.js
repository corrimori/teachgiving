import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import { baseUrl } from './pages/CharityPage'

class PledgeForm extends Component {

  state = {
    value: '',
    kids_id: '',
    pledgeAmount: 0,
    numOfWeeks: 0,
  }

  // onSubmit of pledge FORM
  onSubmitPledge = (event) => {
    event.preventDefault();
    console.log('this.state==========>>', this.state);

    let pledgeInfoPost = {
      kidName: this.state.kids_id,
      charityName: this.state.charityName,
      pledgeAmount: this.state.pledgeAmount,
      numberOfWeeks: this.state.numOfWeeks
    }
    // write a fetch request to post pledgeInfo to state
    console.log('pledgeInfoPost=================>>', pledgeInfoPost);
    this.sendPledgeInfo();
  }

// pledgeAmount is value
  handleChange = (event) => {
    this.setState({value: event.target.value })
    console.log('event.target.value>>', event.target.value)
    console.log('this.state.value>>>', this.state.value);
  }


  // onChange handler function definition here
  // the purpose of this function is to write
  // the pledge amount aka the input to the state

  sendPledgeInfo = async () => {
    const { pledgeAmount, numberOfWeeks } = this.state;
    // console.log('pledgeInfo ************', pledgeInfo)
    console.log('baseUrl', {baseUrl})
    // let pledgeCall = {baseUrl} + '/pledges'
    fetch( {baseUrl} + '/pledges', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        kids_id: 1,
        charities_id: 2,
        pledgeAmount,
        numberOfWeeks
      })
    })
    .then(response => {
      if (!response.ok){
        throw new Error('request failed')
      }
      return response.json()
    })
  }


  render() {
    console.log('In PledgeForm component', this.props)
    console.log('the state', this.state)
    console.log('baseURL+++++++++++++++++', baseUrl);


    return (
      <div>
        <Form onSubmit={this.onSubmitPledge}>
          <Form.Group widths='equal'>
            <Form.Field
              label='Who is giving?'
              control='select'>
              <option value="kid1">Kid-1</option>
              <option value='kid2'>Kid-2</option>
              <option value='kid3'>Kid-3</option>
            </Form.Field>
          </Form.Group>

          <Form.Group grouped>
            <label>Who are you giving to today?</label>
            <Form.Field label='SPCA' control='input' type='radio' name='htmlRadios'
            onChange={
              (event) => {
                console.log(event.target)
                this.setState( { charityName: "SPCA"} )
              }
            } />
            <Form.Field label='SF Food Bank' control='input' type='radio' name='htmlRadios'
            onChange={
              (event) => {
                console.log(event.target)
                this.setState( { charityName: "SF Food Bank"} )
              }
            }  />
            <Form.Field label='Golden Gate Park' control='input' type='radio' name='htmlRadios'
            onChange={
              (event) => {
                console.log(event.target)
                this.setState( { charityName: "Golden Gate Park"} )
              }
            } />
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Pledge Amount' placeholder='Amount' placeholder='amount'
            // value={this.state.pledgeAmount}
            onChange={
              (event) =>
                this.setState( { pledgeAmount: event.target.value} )
              } /> // add an onChange handler here
            <Form.Field control={Input} label='Number of Weeks you want to give' placeholder='weeks'
            onChange={
              (event) =>
                this.setState( { numberOfWeeks: event.target.value} )
              } />
          </Form.Group>

          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Give Now'
            label='fill in later'
            color='green'
          />
        </Form>
      </div>
    )
   }
  // ending class bracket
  }


export default PledgeForm







// {id: 1, kids_id: 2, charities_id: 3, pledgeAmount: 0.25, numOfWeeks: 2},
