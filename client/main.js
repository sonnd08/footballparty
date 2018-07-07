import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Switch, browserHistory, withRouter} from 'react-router'
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";

import './main.html';
import App from '../imports/ui/App';
import Home from '../imports/ui/Home';
import GroundDetail from '../imports/ui/GroundDetail';
import Matchs from '../imports/ui/Matchs';
 

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Switch>
        <Route exact path='/' render={() => <App body={<Home/>}/>}/>
        <Route exact path='/GroundDetail' render={() => <App body={<GroundDetail/>}/>}/>
        <Route exact path='/Matchs' render={() => <App body={<Matchs/>}/>}/>
     </Switch>
    </Router>,
    document.getElementById('root'));
});