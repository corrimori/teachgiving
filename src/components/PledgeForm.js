import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

// sendAmount = async() => {
//   const pledgeAmt = { props.pledges.pledgeAmt }
//   fetch(baseUrl + '/pledges', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json'
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       kid_id,
//       charity_id,
//       pledgeAmt,
//       numOfWeeks
//     })
//   })
//   this.setState({ pledgeAmt: this.state.pledgeAmt })
// }


class PledgeForm extends Component {
  state = {
    value: '',
    kidName: '',
    charityName: '',
    pledgeAmount: 0,
    numberOfWeeks: 0
  }

  onUpdatePledge = () => {
    console.log('IN onUpdatePledge FUNCTION');
  }

  // handleChange(event) {
  //   props({title: event.target.value})
  // // this.setState({title: event.target.value})
  // }

  onSubmitHandler = async(event) => {
    event.preventDefault()
    console.log('HERE in onUpdatePledge');
    console.log('props in onUpdatePledge>>', this.props);
    console.log('this.state>>', this.state);

    let pledgeInfo = {
      kidName: this.state.kidName,
      charityName: this.state.charityName,
      pledgeAmount: this.state.pledgeAmount,
      numberOfWeeks: this.state.password
    }
    this.props.onUpdatePledge(pledgeInfo)
  }

  render() {
    console.log('In PledgeForm component', this.props)

    return (
      <div>
        <Form onSubmit={this.onUpdatePledge}>
          <Form.Group widths='equal'>
            <Form.Field label='Who is giving?' control='select'>
              <option value='kid1'>Kid-1</option>
              <option value='kid2'>Kid-2</option>
              <option value='kid3'>Kid-3</option>
            </Form.Field>
          </Form.Group>

          <Form.Group grouped>
            <label>Who are you giving to today?</label>
            <Form.Field label='SPCA' control='input' type='radio' name='htmlRadios' />
            <Form.Field label='SF Food Bank' control='input' type='radio' name='htmlRadios' />
            <Form.Field label='Golden Gate Park' control='input' type='radio' name='htmlRadios' />
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Pledge Amount' placeholder='Amount' />
            <Form.Field control={Input} label='Number of Weeks you want to give' placeholder='weeks' />
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
