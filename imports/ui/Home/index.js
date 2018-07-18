import React, { Component } from 'react';

import Ground from './Item'
import FilterBar from './FilterBar'
import Loading from '../_Components/Loading';
// import UpcomingModal from './UpcomingModal'
import { connect } from 'react-redux'
import GroundsContainer from './groundsContainer'
import { withTracker } from 'meteor/react-meteor-data';

class Body extends Component {
  render() {
    return (
      <div className="MainBody container">
        <FilterBar/>
        <div className="row content">
          <GroundsContainer />
        </div>

        <Loading />
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    upcomingModalDisplay: state.toggleModals.upcomingModal.display,
    priceQuery: state.filters.Grounds.price.priceQuery,
  }
};
export default connect(mapStatetoProps)(Body);
// export default connect(mapStatetoProps)(Body);