import React, { Component } from 'react';
export default class StadiumNameAndAddress extends Component {
  render() {
    let {name, address} = this.props
    return (
      <div className="stadiumNameAndAddressContainer">
        <p className="name green mb-1">{name||'Old Trafford Stadium'}</p>
        <p className="address gray">{address||'Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK'}</p>
      </div>
    );
  }
}