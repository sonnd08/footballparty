import React, { Component } from 'react';

import { Accounts } from 'meteor/accounts-base';

// import {Switch, browserHistory, withRouter} from 'react-router-dom'
import { Link, withRouter, Redirect} from 'react-router-dom'

const initialState = {
  username: '',
  password: '',
  password2: '',
  err: ''
}
class CustomRegister extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    this.setState(initialState)
  }
  onRegister = () => {
    Accounts.createUser({
      username: this.state.username,
      password: this.state.password
    }, (err) => {
      if (err) {
        console.log(err);
        this.setState({ err:err.message })
      }
      else{
        console.log('Redirect');
        return  this.props.history.push('/');
      }
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-9 col-lg-7 mt-5">
            <h1 className="mb-4">Register:</h1>
            <label htmlFor="#userName">User name:</label>
            <input value={this.state.username} type="text" id="userName" className="form-control mb-3" onChange={(e) => { this.setState({ username: e.target.value }) }} />

            <label htmlFor="#password">Password:</label>
            <input value={this.state.password} type="password" id="password" className="form-control mb-3" onChange={(e) => { this.setState({ password: e.target.value }) }} />

            <label htmlFor="#password2">Confirm Password:</label>
            <input value={this.state.password2} type="password" id="password2" className="form-control mb-3" onChange={(e) => { this.setState({ password2: e.target.value }) }} />

            <div className="d-flex justify-content-center">
              <button className="btn btn-success col-md-4" onClick={this.onRegister}>Submit</button>
            </div>
            {this.state.err?<div className='alert alert-danger mt-3'>{this.state.err}</div>:''}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CustomRegister);
// export default connect(mapStatetoProps)(Body);