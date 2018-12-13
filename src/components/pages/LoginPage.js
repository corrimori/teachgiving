import React from 'react';
import { Link } from 'react-router-dom';
import '../../login.css';

// class CharityPage extends Component {

// state = {
//   name: '',
//   hashpass: '',
// };

const onChange = e => this.setState({ [e.target.name]: [e.target.value] });

const onSubmit = e => {
  e.preventDefault();

  console.log('login form submitted...', this.state);

  // const post = {
  //   name: this.state.username,
  //   hashpass: this.state.hasspass,
  // };
};

const LoginPage = () => {
  console.log('this.state>>>>>', this.state);
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={this.onSubmit}>
          <input type="text" placeholder="name" onChange={this.onChange} />
          <input
            type="password"
            placeholder="password"
            onChange={this.onChange}
          />
          <button type="submit">login</button>
          <p className="message">
            Not registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

// <Link to='/charities'>
//   <Button color='orange' size='huge' >
//     Get Started
//     <Icon name='right arrow' />
//   </Button>
// </Link>

export default LoginPage;

/*
<script>
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
</script> */
