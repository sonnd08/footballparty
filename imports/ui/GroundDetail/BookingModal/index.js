import React, { Component } from 'react';
import Step1 from './Step1'
import Step2 from './Step2'

export default class BookingModal extends Component {
  render() {
    return (
        <div className="bookingModalContainer">
            <div id="bookingModal" className="popupModal">
                <div className="row justify-content-center">
                    <div className="col-lg-10 mt-l-5">
                        <div className="modal-content">
                            <Step2/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
  }
}