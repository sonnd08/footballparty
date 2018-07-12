import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import { LinkStyled } from '../commons/styles';

export default class Ground extends Component {
  render() {
    let {info} = this.props;
    // console.log(info);
    return (
        <div className="itemContainer col-lg-4">
            <Link to={`GroundDetail/${info._id._str}`}>
              <div className="item">
                  <img src={info.imgURL} alt=""/>

                  <div className="info">
                      <p className="name">{info.name}</p>

                      <div className="row">
                          <div className="col-8">
                              <p className="address">{info.address}</p>
                          </div>
                          <div className="col-4">
                              <p className="price">${info.price}</p>
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