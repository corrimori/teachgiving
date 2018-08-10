import React, { Component } from 'react';
import Background from '../../img/girl-309067889.jpg'
import '../../App.css';

var sectionStyle = {
  maxWidth: "100%",
  height: "500px",
  backgroundImage: `url(${Background})`
};

class Dev extends Component {

    render() {
      return (
        <section style = { sectionStyle }>
          <p>You are on the Dev Page!</p>
        </section>
      )
    }
}

export default Dev;
