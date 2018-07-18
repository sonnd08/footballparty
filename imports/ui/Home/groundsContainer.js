import React, { Component } from 'react';

import Ground from './Item'
import { connect } from 'react-redux'
import { Grounds } from '../../../lib/collections/grounds'

import { withTracker } from 'meteor/react-meteor-data';

class GroundsContainer extends Component {
  render() {
    return (
      <>
        {this.props.grounds.map((ground) => (
          <Ground key={ground._id} info={ground} />))}
      </>
    );
  }
}

function mapStatetoProps(state) {
  return {
    keyword: state.filters.Grounds.keyword,
    priceQuery: state.filters.Grounds.price.priceQuery,
    groundRating: state.filters.Grounds.rating,
  }
};
export default connect(mapStatetoProps)(
  withTracker((props) => {

    Meteor.subscribe('grounds');
    return {
      grounds: Grounds.find({
        price:props.priceQuery,
        name: new RegExp(`.*${props.keyword}.*`, 'i') ,
        rating: {$gte: props.groundRating*1}
      }).fetch(),
    };
  })(GroundsContainer));
// export default connect(mapStatetoProps)(Body);