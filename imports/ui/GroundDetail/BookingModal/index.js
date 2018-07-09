import React, { Component } from 'react';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

import {connect} from 'react-redux'
import {toggleBookingModal} from '../../_Redux/Actions/toggleModal'
class BookingModal extends Component {
  toggleBookingModal = ()=>{
    this.props.dispatch(toggleBookingModal())
  }
  render() {
    return (
        <div className="bookingModalContainer" 
          style={{display:this.props.bookingModalDisplay}}
          onClick={this.toggleBookingModal}
        >
            <div id="bookingModal" className="popupModal">
                <div className="row justify-content-center">
                    <div className="col-lg-10 mt-l-5">
                        <div className="modal-content">
                            <Step1/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
  }
}

export default connect(store=>{return{
  bookingModalDisplay: store.bookingModal.display
}})(BookingModal)