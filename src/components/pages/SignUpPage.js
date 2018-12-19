import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../login.css';

class SignUpPage extends Component {
  state = {
    username: '',
    hashPass: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log('signup form submitted...');
    console.log('this.state- signupform>>>', this.state);

    const post = {
      name: this.state.username,
      password: this.state.hashPass,
    };
    // const post = this.state;
    console.log('this.props>>>>>>>', this.props);
    this.props.createUser(post);
  };

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="register-form" onSubmit={this.onSubmit}>
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
            <button type="submit">create</button>
            <p className="message">
              Already registered? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;

/*
<script>
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
</script> */
