import React, { Component } from 'react';


import Nav from './Nav';
import Footer from './Footer'
import GroundDetail from './GroundDetail';
import Home from './Home';

 

// App component - represents the whole app

export default class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        {/* <GroundDetail/> */}
        <Home/>
        <Footer/>
      </div>

    );

  }

}