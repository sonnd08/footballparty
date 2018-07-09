import React, {Component} from 'react';
import {connect} from 'react-redux'
import {toggleNextBookingStep} from '../../../_Redux/Actions/toggleModal'

class NextStepBtn extends Component {
  onNextStepClick = () =>{
    this.props.dispatch(toggleNextBookingStep())
  }
  render() {
    return (
      <button className="nextStepBtn" onClick={this.onNextStepClick}>Next</button>
    );
  }
}
export default connect(store=>{return {}})(NextStepBtn);