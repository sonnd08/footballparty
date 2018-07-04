import React, { Component } from 'react';
import Rating from '../Rating';
import AvatarAndName from '../AvatarAndName'
import MultiBtn from '../MultiBtn'
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
              <hr/>
              <AvatarAndName name="Phuong Nguyen" additional="Owner"/>
              <p className="description mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
              <p className="price">$25.00</p>
              <p className="per">/hr</p>

              <MultiBtn/>

              <span className="timeLeft">4</span>
              <span className="timeUnit">&nbsp;hour</span>
              
              <span className="status">&nbsp; Available today</span>
          </div>
        </div>
      </div>
		);
	}
}