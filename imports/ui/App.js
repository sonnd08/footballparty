import React, { Component } from 'react';


import Nav from './Nav.js';
import MainBody from './MainBody/MainBody';
import Footer from './Footer'

 

// App component - represents the whole app

export default class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <MainBody/>
        <Footer/>
      </div>

    );

  }

}