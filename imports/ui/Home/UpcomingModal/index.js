import React, { Component } from 'react';
import Step2 from './Step2'

export default class BookingModal extends Component {
  render() {
    return (
        <div className="bookingModalContainer">
            <div id="bookingModal" className="popupModal">
                <div className="row justify-content-center">
                    <div className="col-lg-8 mt-l-5 col-md-10 col-xs-12">
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