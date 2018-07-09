import React, { Component } from 'react';
import Step2 from './Step2'

import {connect} from 'react-redux'
import {toggleUpcomingModal} from '../../_Redux/Actions/toggleModal'

class UpcomingModal extends Component {
  
  toggleModal = ()=>{
    this.props.dispatch(toggleUpcomingModal());
  }
  render() {
    return (
        <div className="bookingModalContainer" 
          style={{display:this.props.display||'block'} }
          onClick = {this.toggleModal}
        >
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
export default connect((state)=>{})(UpcomingModal)