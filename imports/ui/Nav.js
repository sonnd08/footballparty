import React, { Component } from 'react';
import Logo from './Logo'

export default class Nav extends Component {
  render() {
   

    return (
      <nav className="navBar">
        <div className="container">
          <div className="content">

            <Logo/>

            <div className="centerBlock">
              <input type="search" name="" className="seachInput" placeholder="Search ground, team or someone..."/>
              <ul>
                <li>find match</li>
                <li>grounds</li>
                <li>messages</li>
                <li className="active">upcoming</li>
              </ul>
            </div>

            <div className="avatarContainer">
              <img src="https://dummyimage.com/35x35/ffffff/000000" alt="" className="avatar"/>
              <div className="downArrow"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}