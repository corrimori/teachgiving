import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../login.css';

class LoginPage extends Component {
  state = {
    username: '',
    hashpass: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log('login form submitted...');
    console.log('this.state######', this.state);

    // const post = {
    //   username: this.state.username,
    //   hashpass: this.state.hashpass,
    // };
    const post = this.state;
    console.log('this.props>>>>>>>', this.props);
    this.props.createNewUser(this.state);
  };

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="name"
              onChange={this.onChange}
              name="username"
            />
            <input
              type="password"
              placeholder="password"
              onChange={this.onChange}
              name="hashpass"
            />
            <button type="submit">login</button>
            <p className="message">
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
