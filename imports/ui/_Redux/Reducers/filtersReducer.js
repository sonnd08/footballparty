
export default function reducer(state={
  Matchs: {keyword:''},
}, action){
  console.log('filter action');
  console.log(action);
  switch(action.type){
    case "setMatchsFilterKeyword":{
      return {
        ...state, 
        Matchs:{keyword: action.payload.keyword},
      }
    }
    default:{
      return state;
    }
  }
}