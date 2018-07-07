import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import { LinkStyled } from '../commons/styles';

export default class Item extends Component {
  render() {
   

    return (
        <div className="itemContainer col-lg-4">
            <Link to="GroundDetail">
              <div className="item">
                  <img src="https://dummyimage.com/500x300/000000/ffffff" alt=""/>

                  <div className="info">
                      <p className="name">Old Trafford Stadium</p>

                      <div className="row">
                          <div className="col-8">
                              <p className="address">Sir Matt Busby Way, Stretford Manchester M16 0RA, UK</p>
                          </div>
                          <div className="col-4">
                              <p className="price">$25.00</p>
                              <p className="per">/hour</p>
                          </div>
                      </div>
                  </div>
              </div>
            </Link>
        </div>
    );
  }
}