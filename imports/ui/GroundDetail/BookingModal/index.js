import React, { Component } from 'react';
import Step1 from './Step1'

export default class BookingModal extends Component {
  render() {
    return (
        <div className="bookingModalContainer">
            <div id="bookingModal" className="popupModal">
                <div className="row justify-content-center">
                    <div className="col-lg-8 mt-l-5">
                        <Step1/>
                    </div>
                </div>
            </div>
        </div>
        );
  }
}