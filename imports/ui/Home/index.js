import React, { Component } from 'react';

import Item from './Item'
import FilterBar from './FilterBar'
import Loading from '../_Components/Loading';
import UpcomingModal from './UpcomingModal'
import {connect} from 'react-redux'


class Body extends Component {
  render() {
    console.log('this.props');
    console.log(this.props);
    let {upcomingModalDisplay} = this.props;
    return (
        <div className="MainBody container">
            <UpcomingModal display={upcomingModalDisplay}/>
            <FilterBar/>
            <div className="row content">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>

            <Loading/>
        </div>
    );
  }
}

function mapStatetoProps(store){
  return {
    upcomingModalDisplay: store.upcomingModalDisplay
  }
};
export default connect(mapStatetoProps)(Body);