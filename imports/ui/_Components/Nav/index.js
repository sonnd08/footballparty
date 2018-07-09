import React, { Component } from 'react';
import Logo from '../Logo'
import SearchBar from '../SearchBar'
import UpcomingModal from './UpcomingModal'
import {
  Link,
  withRouter
} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleUpcomingModal} from '../../_Redux/Actions/toggleModal'
class Nav extends Component {

  showUpcomingModal = ()=>{
    this.props.dispatch(toggleUpcomingModal())
  }
  render() {
    
    let {upcomingModalDisplay} = this.props;
    return (
      <div>
        <UpcomingModal display={upcomingModalDisplay}/>
        <nav className="navBar">
          <div className="container">
            <div className="content">

              <Link to="/">
                <Logo/>
              </Link>
              <div className="centerBlock">
                <SearchBar/>
                <ul>
                  <li>
                    <Link to="/Matchs">find match</Link>
                  </li>
                  <li>
                    <Link to="/">grounds</Link>
                  </li>
                  <li>messages</li>
                  <li className="active" onClick={this.showUpcomingModal}>upcoming</li>
                </ul>
              </div>

              <div className="avatarContainer">
                <img src="https://dummyimage.com/35x35/ffffff/000000" alt="" className="avatar"/>
                <div className="downArrow"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStatetoProps(store){
  return {
    upcomingModalDisplay: store.upcomingModalDisplay
  }
};
export default connect(mapStatetoProps)(Nav)