import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {Switch, browserHistory, withRouter} from 'react-router'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './main.html';
import App from '../imports/ui/App';
import Home from '../imports/ui/Home';
import GroundDetail from '../imports/ui/GroundDetail';
import Matchs from '../imports/ui/Matchs';
import '../imports/startup/accounts-config.js';
import Dashboard from '../imports/ui/Dashboard';


Meteor.startup(() => {
    // console.log('rendering');

    render(
        <Router history={browserHistory}>
          <App>
              <Switch>
                  <Route exact path='/' render={() =>< Home />}/>
                  <Route exact path='/GroundDetail/:groundID' render={() => <GroundDetail/>}/>
                  <Route exact path='/matchs' render={() => <Matchs/>}/>
                  <Route exact path='/dashboard' render={() => <Dashboard/>}/>
              </Switch>
          </App>
        </Router>, document.getElementById('root'));
});