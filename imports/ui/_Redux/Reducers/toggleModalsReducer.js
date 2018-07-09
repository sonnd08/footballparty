
export default function reducer(state={
  upcomingModalDisplay: "none",
  bookingModal:{
    display: "none",
    currStep: 1
  }
}, action){
  console.log(action.type);
  switch(action.type){
    case "toggleUpcomingModal":{
      let newValue = state.upcomingModalDisplay==="none"?"block":"none"
      return {...state, upcomingModalDisplay:newValue}
    }
    case "toggleBookingModal":{
      let newValue = state.bookingModal.display==="none"?"block":"none"
      return {...state, 
        bookingModal:{
          display:newValue,
          currStep: 1
        }}
    }
    case "hideBookingModal":{
      return {...state, 
        bookingModal:{
          display:"none",
          currStep: 1
        }}
    }
    case "toggleNextBookingStep":{

      return {...state, bookingModal:{currStep:state.bookingModal.currStep+1}}
    }
    // case "sendInvite":{
    //   let newValue = state.bookingModal.display==="none"?"block":"none"
    //   return {...state, bookingModal:{currStep:state.bookingModal.currStep++}}
    // }
    default:{
      return state;
    }
  }
}