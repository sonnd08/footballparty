import React, { Component } from 'react';

import Ground from './Item'
import FilterBar from './FilterBar'
import Loading from '../_Components/Loading';
// import UpcomingModal from './UpcomingModal'
import {connect} from 'react-redux'
import {Grounds} from '../../api/models/db/_meteor/grounds'

import { withTracker } from 'meteor/react-meteor-data';

class Body extends Component {
  render() {
    return (
        <div className="MainBody container">
            <FilterBar/>
            <div className="row content">
            {this.props.grounds.map((ground) => (
            <Ground key={ground._id} info={ground} />))}
            </div>

            <Loading/>
        </div>
    );
  }
}

function mapStatetoProps(store){
  return {
    upcomingModalDisplay: store.toggleModals.upcomingModalDisplay
  }
};
export default withTracker(() => {
  console.log('Grounds.find({}).fetch()');
  console.log(Grounds.find({}).fetch());
  return {
    grounds: Grounds.find({}).fetch(),
  };
})(connect(mapStatetoProps)(Body));
// export default connect(mapStatetoProps)(Body);