import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import baseUrl from './pages/CharityPage'

class PledgeForm extends Component {

  state = {
    value: '',
    kids_id: '',
    pledgeAmount: 0,
    numOfWeeks: 0,
  }

  // componentDidMount= async () =>{
  //   await this.getPledgeInfo();
  // }

//this is the fetch to collect ALL from PLEDGE route
  // getPledgeInfo = async () => {
  //   console.log('pledgeInfo befor fetch ************', pledgeInfo)
  //   const pledgeInfoJSON = await fetch('http://localhost:3003/pledges')
  //   let pledgeInfo = await pledgeInfoJSON.json()
  //   console.log(pledgeInfo,"<<<<pledgeInfo after fetch");
  //   this.setState({
  //     pledgeInfo,
  //   })
  // }

  // onSubmit of pledge FORM
  onSubmitPledge = (event) => {
    event.preventDefault();
    console.log('this.state==========>>', this.state);

    let pledgeInfoPost = {
      // kidName: this.state.kidName,
      // charityName: this.state.charityName,
      pledgeAmount: this.state.pledgeAmount,
      numberOfWeeks: this.state.numOfWeeks
    }
    // write a fetch request to post pledgeInfo to state
    // console.log('pledgeInfo=================>>', pledgeInfo);
    this.sendPledgeInfo();
  }

  handleChange = (event) => {
    this.setState({pledgeAmount: event.target.value })
    console.log('event.target.value>>', event.target.value)
    console.log('this.state.value>>>', this.state.value);
  }

  // from react docs ********************
 //  handleChange(event) {
 //   this.setState({value: event.target.value});
 // }


  // onChange handler function definition here
  // the purpose of this function is to write
  // the pledge amount aka the input to the state

  sendPledgeInfo = async () => {
    const { pledgeAmount, numberOfWeeks } = this.state;
    // console.log('pledgeInfo ************', pledgeInfo)
    fetch( 'http://localhost:3003/pledges', {
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
            <Form.Field label='SPCA' control='input' type='radio' name='htmlRadios' />
            <Form.Field label='SF Food Bank' control='input' type='radio' name='htmlRadios' />
            <Form.Field label='Golden Gate Park' control='input' type='radio' name='htmlRadios'
            onChange={
              (event) => {
                console.log(event.target)
                this.setState( { charityName: event.target.value} )
              }
            } />
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Pledge Amount' placeholder='Amount' value={this.state.pledgeAmount}
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
