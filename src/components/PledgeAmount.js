import React from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

// sendAmount = async() => {
//   const pledgeAmt = { props.pledges.pledgeAmt }
//   fetch(apiUrl + '/pledges', {
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

const PledgeAmount = props => {

  if (props.allPledges.length === 0 ) {
    return (<div>loading...</div>)
  } else {
  console.log('In PledgeAmount component = props', props)
  console.log('props.allPledges.pledgeAmt', props.allPledges.pledgeAmt);


  return (
    <div>
      <Form>
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

        <input onClick={this.props.sendAmount(props.pledges.pledgeAmt)}
        type="submit" value="amountSend" className="btn btn-primary" />
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
}

export default PledgeAmount
