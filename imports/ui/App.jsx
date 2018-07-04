import React, { Component } from 'react';


import Nav from './Nav';
import Body from './GroundDetail';
import Footer from './Footer'

 

// App component - represents the whole app

export default class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Body/>
        <Footer/>
      </div>

    );

  }

}