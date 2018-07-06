import React, { Component } from 'react';


import Nav from './_Components/Nav';
import Footer from './_Components/Footer'
import GroundDetail from './GroundDetail';
import Home from './Home';
import Matchs from './Matchs';

 

// App component - represents the whole app

export default class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        {/* <Matchs/> */}
        <GroundDetail/>
        {/* <Home/> */}
        <Footer/>
      </div>

    );

  }

}