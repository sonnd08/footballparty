import React, {Component} from 'react';
export default class StadiumNameAndAddress extends Component {
    render() {
        return (
            <div className="stadiumNameAndAddressContainer">
                <p className="name green mb-1">Old Trafford Stadium</p>
                <p className="address gray">Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK</p>
            </div>
        );
    }
}