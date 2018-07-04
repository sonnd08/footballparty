import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
   

    return (
        <div className="loadingContainer">
            <p className="text">
                <i className="icon-spinner3"></i> 
                &nbsp;
                Loading more...
            </p>
        </div>
    );
  }
}