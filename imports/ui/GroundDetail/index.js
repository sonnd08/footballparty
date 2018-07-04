import React, { Component } from 'react';
import Rating from '../Rating';


export default class Body extends Component {
	render() {
		return (
      <div className="groundDetail container">
        <div className="titleContainer">
          <a href="#"><i className="icon-arrow-left mr-4"></i></a>
          <h1 className="title">Ground Info</h1>
        </div>

        <div className="row contentContainer">
          <div className="col-lg-8">
            <div>
              <img className="mainPic" src="/assets/imgs/ground.png" alt=""/>
            </div>
          </div>

          <div className="col-lg-4 contentDetail">
              <h2 className="groundName">Old Trafford Stadium</h2>
              <p className="address">Sir Matt Busby Way, Stretford Manchester M16 0RA, UK</p>
              <Rating value="4.5"/>
          </div>
        </div>
      </div>
		);
	}
}