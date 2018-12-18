import React, { Component } from 'react';
import { Form, Button, Input, Radio } from 'semantic-ui-react';
import { sendPledgeInfo } from '../services/api';
import { Link, Redirect } from 'react-router-dom';

class PledgeForm extends Component {
  state = {
    value: '',
    kids_id: 0,
    charity_id: 0,
    charityName: '',
    pledgeAmount: 0,
    numOfWeeks: 0,
  };

  // onSubmit of pledge FORM
  onSubmitPledge = event => {
    event.preventDefault();
    console.log('this.state==========>>', this.state);

    let pledgeInfo = {
      kid_id: 2, //this.state.kids_id,
      charity_id: 2, //this.state.value, //this.state.charity_id,
      pledgeAmount: this.state.pledgeAmount,
      numOfWeeks: this.state.numOfWeeks,
    };
    // write a fetch request to post pledgeInfo to state
    console.log('pledgeInfo=================>>', pledgeInfo);
    sendPledgeInfo(pledgeInfo);
    // redirectToDashboard();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const formWrap = {
      margin: '5em',
    };

    return (
      <div style={formWrap}>
        <Form onSubmit={this.onSubmitPledge}>
          <Form.Group grouped>
            <label>Who are you giving to today?</label>
            <Form.Field>
              <Radio
                label="SPCA"
                name="radioGroup"
                value="SPCA"
                checked={this.state.value === 'SPCA'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="SF Food Bank"
                name="radioGroup"
                value="SF Food Bank"
                // charity_id={this.state.charity_id === 3}
                checked={this.state.value === 'SF Food Bank'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Golden Gate Park"
                name="radioGroup"
                value="Golden Gate Park"
                charity_id={this.state.charity_id === 1}
                checked={this.state.value === 'Golden Gate Park'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Hamilton Families"
                name="radioGroup"
                value="Hamilton Families"
                charity_id={this.state.charity_id === 4}
                checked={this.state.value === 'Hamilton Families'}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Pledge Amount"
              placeholder="amount"
              onChange={this.onChange}
              name="pledgeAmount"
            />
            <Form.Field
              control={Input}
              label="Number of Weeks you want to give"
              placeholder="weeks"
              onChange={this.onChange}
              name="numOfWeeks"
            />
          </Form.Group>

          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Give Now"
            color="green"
            onClick={() => <Link to="/dashboard" />}
          />
        </Form>
        <br />
        <Button as={Link} to="/dashboard" size="large">
          Go to Dashboard
        </Button>
      </div>
    );
  }
  // ending class bracket
}

export default PledgeForm;

// {id: 1, kids_id: 2, charities_id: 3, pledgeAmount: 0.25, numOfWeeks: 2},
