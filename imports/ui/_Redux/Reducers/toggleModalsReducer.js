
export default function reducer(state={
  upcomingModal:{
    display: "none",
    matchDetail: {
      matchOrigin: {},
      firstClub:{},
      firstClubPlayers:0,
      ground:{},
    },
  },
  bookingModal:{
    display: "none",
    currStep: 1
  }
}, action){
  // console.log(action.type);
  switch(action.type){
    case "toggleUpcomingModal":{
      let newValue = state.upcomingModal.display==="none"?"block":"none"
      return {
        ...state, 
        upcomingModal:{
          display:newValue,
          matchDetail: {...state.upcomingModal.matchDetail,...action.payload.matchDetail}
        }}
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