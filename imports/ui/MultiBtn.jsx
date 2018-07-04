import React, { Component } from 'react';


export default class MultiBtn extends Component {
	render() {

		return (
      <div className="multiBtnContainer d-flex justify-conten-center">
        <button className="button firstBtn activeBtn">BOOK NOW</button>
        <button className="button">Favorite</button>
        <button className="button">Share</button>
      </div>
		);
	}
}