
export default function reducer(state={
  upcomingModalDisplay: "none",
}, action){
  switch(action.type){
    case "toggleUpcomingModal":{
      let newValue = state.upcomingModalDisplay==="none"?"block":"none"
      return {...state, upcomingModalDisplay:newValue}
    }
    default:{
      return state;
    }
  }
}