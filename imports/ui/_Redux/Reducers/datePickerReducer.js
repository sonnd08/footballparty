
export default function reducer(state={
  currPickedDate: "none",
}, action){
  console.log('setCurrPickedDate');
  console.log(action);
  switch(action.type){
    case "setCurrPickedDate":{
      return {
        ...state, 
        currPickedDate:action.payload.date,
      }
    }
    default:{
      return state;
    }
  }
}