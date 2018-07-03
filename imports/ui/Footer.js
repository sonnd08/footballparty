import React, { Component } from 'react';
import Logo from './Logo'

export default class Footer extends Component {
  render() {
   

    return (
      <div className="container">
        <footer className="footerContainer">
            <hr/>
            <div className="row footerNavContainer">
              <div className="col-lg-2">
                <Logo/>
              </div>

              <div className="col-lg-8">
                <nav className="centerBlock footerNav">
                  <ul>
                    <li>Download App</li>
                    <li>F.A.Q</li>
                    <li>Support</li>
                    <li>Feedback</li>
                  </ul>
                </nav>
              </div>
              
            </div>
            <p className="copyRight">&copy;2017 Zigvy Inc</p>
        </footer>
      </div>
    );
  }
}