import React, { Component } from 'react';
import Logo from '../Logo'
import SearchBar from '../SearchBar'
import UpcomingModal from './UpcomingModal'
import NavAvatar from './_Components/NavAvatar'
import {
  Link,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleUpcomingModal } from '../../_Redux/Actions/toggleModal'

import AccountsUIWrapper from '../AccountsUIWrapper';
import { withTracker } from 'meteor/react-meteor-data';

class Nav extends Component {

  showUpcomingModal = () => {
    this.props.dispatch(toggleUpcomingModal())
  }
  render() {

    let { upcomingModalDisplay } = this.props;
    return (
      <div>
        <UpcomingModal display={upcomingModalDisplay} />
        <nav className="navBar">
          <div className="container">
            <div className="content">

              <Link to="/" className="mr-3">
                <Logo />
              </Link>
              <div className="centerBlock">
                <div className="row">
                  <div className="col-lg-4 d-flex align-items-center">
                    <SearchBar />
                  </div>
                  <div className="col-lg-8">
                    <ul>
                      <li>
                        <Link to="/Matchs">find match</Link>
                      </li>
                      <li>
                        <Link to="/">grounds</Link>
                      </li>
                      <li>messages</li>
                      {this.props.currUser
                        ? <Link to="/dashboard"><li >Dashboard</li></Link>
                        : <li className="active" onClick={this.showUpcomingModal}>upcoming</li>
                      }
                      
                    </ul>
                  </div>
                </div>
              </div>

              <div className='accountsUIWrapperContainer'>
                <NavAvatar currUser={this.props.currUser} />
                <AccountsUIWrapper />
              </div>

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStatetoProps(store) {
  return {
    upcomingModalDisplay: store.toggleModals.upcomingModal.display
  }
};
export default connect(mapStatetoProps)(
  withTracker((props) => {
    let currUser = Meteor.user();
    return {
      currUser
    }
  }
  )(Nav))