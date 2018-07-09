import React, { Component } from 'react';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {hideBookingModal} from '../../_Redux/Actions/toggleModal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '30px',
    paddingRight: '30px',
    maxWidth: '960px',
    width: 'calc(100% - 30px)',
    boxSizing: 'border-box',
    maxHeight: 'calc(100vh - 30px)',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0',
    border: 'none',
    overflow: 'hidden'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999
  }
};
// Modal.setAppElement('#modal-container');

class BookingModal extends Component {

  onCloseModal = ()=>{
    this.props.dispatch(hideBookingModal());
  }

  render() {
    let {bookingModal} = this.props;
    let stepToRender;
    console.log(bookingModal.currStep);
    switch(bookingModal.currStep){
      case 2:{
        stepToRender= <Step2/>;
        break;
      }
      case 3:{
        stepToRender= <Step3/>;
        break;
      }
      default:{
        stepToRender= <Step1/>;
        break;
      }
    }
    return (
          // <div className="bookingModalContainer"  style={{display:bookingModal.display}}>
              <div id="bookingModal" className="popupModal">
                  <div className="row justify-content-center">
                      <div className="col-lg-10 mt-l-5" >
                        <Modal
                            isOpen={bookingModal.display!=="none"}
                            onRequestClose={this.onCloseModal}
                            ariaHideApp={false}
                            style={customStyles}
                        >
                            <div className="modalContent">
                                {stepToRender}
                            </div>
                        </Modal>
                      </div>
                  </div>
              </div>
          // </div>
    );
  }
}

export default connect(store=>{return{
  bookingModal: store.bookingModal,
}})(BookingModal)