import React, { Component } from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleNavAvatar} from '../../../_Redux/Actions/nav'
class NavAvatar extends Component {

  toggleNavAvatar = ()=>{
    this.props.dispatch(toggleNavAvatar())
  }
  render() {
    
    // console.log('NavAvatar');
    return (
      <div className="avatarContainer" onClick={this.toggleNavAvatar}>
        <img src="https://dummyimage.com/35x35/ffffff/000000" alt="" className="avatar"/>
        <div className="downArrow"></div>
        <div className="avatarDropdown" style={{display:this.props.dropdownDisplay}}>
          <p>User Profiles</p>
          <p>Logout</p>
        </div>
      </div>
    );
  }
}

function mapStatetoProps(store){
  // console.log(store);
  return {
    dropdownDisplay: store.nav.dropdownDisplay
  }
};
export default connect(mapStatetoProps)(NavAvatar)