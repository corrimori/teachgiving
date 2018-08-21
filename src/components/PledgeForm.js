import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import { sendPledgeInfo } from '../services/api'

class PledgeForm extends Component {

  state = {
    value: '',
    kids_id: '',
    charityName: '',
    pledgeAmount: 0,
    numOfWeeks: 0
  }

  // onSubmit of pledge FORM
  onSubmitPledge = (event) => {
    event.preventDefault();
    console.log('this.state==========>>', this.state);

    let pledgeInfo = {
      kids_id: 1, //this.state.kids_id,
      charities_id: 2, //this.state.charityName,
      pledgeAmount: this.state.pledgeAmount,
      numberOfWeeks: this.state.numOfWeeks
    }
    // write a fetch request to post pledgeInfo to state
    console.log('pledgeInfo=================>>', pledgeInfo);
    sendPledgeInfo(pledgeInfo);
  }

// pledgeAmount is value
  handleChange = (event) => {
    this.setState({value: event.target.value })
    console.log('event.target.value>>', event.target.value)
    console.log('this.state.value>>>', this.state.value);
  }

  // selectKid = (event) => {
  //   const kid_id = kid_id.target.value
  //   this.setState({kid_id})
  // }


  // onChange handler function definition here
  // the purpose of this function is to write
  // the pledge amount aka the input to the state

  // <Form.Field
  //   label='Who is giving?'
  //   control='select'
  //   onChange=selectKid()>
  //   <option value='1'>Child-1</option>
  //   <option value='2'>Child-2</option>
  //   <option value='3'>Child-3</option>
  // </Form.Field>


  render() {
    const formWrap = {
      margin: '5em'
    }

    return (
      <div style={ formWrap }>
        <Form onSubmit={this.onSubmitPledge}>
          <Form.Group widths='equal'>
            <Form.Field
              label='Who is giving?'
              control='select'>
              <option value='1'>Felix</option>
              <option value='2'>Lauren</option>
              <option value='3'>Lucy</option>
            </Form.Field>
          </Form.Group>

          <Form.Group grouped>
            <label>Who are you giving to today?</label>
            <Form.Field label='SPCA' control='input' type='radio' name='htmlRadios'
            onChange={
              (event) => {
                console.log(event.target)
                this.setState( {charityName: "SPCA"} )
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

            <Form.Field control={Input} label='Pledge Amount' placeholder='amount'
            onChange={
              (event) =>
                this.setState( { pledgeAmount: event.target.value} )
            } />

            <Form.Field control={Input} label='Number of Weeks you want to give' placeholder='weeks'
            onChange={
              (event) =>
                this.setState( { numOfWeeks: event.target.value} )
            } />
          </Form.Group>

          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Give Now'
            label=''
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
