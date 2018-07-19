
export default function reducer(state={
    meteorId:undefined
}, action){
  console.log(action.type);
  switch(action.type){
    case "updateCurrUserId":{
      return {...state, meteorId:action.meteorId}
    }
    default:{
      return state;
    }
  }
}