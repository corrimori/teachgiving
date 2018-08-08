import React from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

const PledgeAmount = () => {

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
        <Form.Field label='Amount' control='input'>

        </Form.Field>
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

export default PledgeAmount
