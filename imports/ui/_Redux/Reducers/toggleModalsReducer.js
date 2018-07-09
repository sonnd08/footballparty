
export default function reducer(state={
  upcomingModalDisplay: "none",
  bookingModal:{
    display: "none",
    step1Display: "none",
    step2Display: "none",
    step3Display: "none",
  }
}, action){
  switch(action.type){
    case "toggleUpcomingModal":{
      let newValue = state.upcomingModalDisplay==="none"?"block":"none"
      return {...state, upcomingModalDisplay:newValue}
    }
    case "toggleBookingModal":{
      let newValue = state.bookingModal.display==="none"?"block":"none"
      return {...state, bookingModal:{display:newValue}}
    }
    default:{
      return state;
    }
  }
}