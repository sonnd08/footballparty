import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
   

    return (
        <div className="logoContainer">
          <img src="/logoIco.svg" alt=""/>
          <span className="logo logoName">Football</span>
          <span className="logo logoName boldWeight">PARTY</span>
        </div>
    );
  }
}