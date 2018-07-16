
export default function reducer(state={
  dropdownDisplay: "none",
}, action){
  // console.log(action.type);
  switch(action.type){
    case "toggleNavAvatar":{
      let newValue = state.dropdownDisplay==="none"?"block":"none"
      return {...state, dropdownDisplay:newValue}
    }
    default:{
      return state;
    }
  }
}