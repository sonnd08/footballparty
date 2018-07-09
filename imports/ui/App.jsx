import React, { Component } from 'react';


import Nav from './_Components/Nav';
import Footer from './_Components/Footer'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import store from './_Redux/Store'
 

// App component - represents the whole app

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Nav/>
          {this.props.body}
          <Footer/>
        </div>
      </Provider>

    );

  }

}