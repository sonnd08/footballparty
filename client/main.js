import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './main.html';
import App from '../imports/ui/App';

 

Meteor.startup(() => {
  render(
  <Router>
    <Route path='/' component={App}/>
  </Router>,
  document.getElementById('root'));
});