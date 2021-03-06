import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../login.css';
import { Button } from 'semantic-ui-react';

class LoginPage extends Component {
  state = {
    username: '',
    hashPass: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log('login form submitted...');
    console.log('this.state######', this.state);

    const post = {
      name: this.state.username,
      password: this.state.hashPass,
    };
    // const post = this.state;
    // console.log('this.props>>>>>>>', this.props);
    this.props.login(post);
    localStorage.setItem('user', post.name);
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
              name="hashPass"
            />
            <button type="submit">login</button>
            <p className="message">
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
        <Button color="green" as={Link} to="/kids" size="small">
          go
        </Button>
      </div>
    );
  }
}

export default LoginPage;
