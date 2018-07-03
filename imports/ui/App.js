import React, { Component } from 'react';


import Nav from './Nav.js';
import MainBody from './MainBody/MainBody';

 

// App component - represents the whole app

export default class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <MainBody/>
      </div>

    );

  }

}