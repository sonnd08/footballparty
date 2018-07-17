
export default function reducer(state = {
  Matchs: { 
    keyword: '',
    priceQuery: {$gte: 0},
    priceOptionIndex:"0",
    rating:{
      order:-1
    },
    time:{
      order:-1
    }
  },
}, action) {
  console.log('filter action');
  console.log(action);
  switch (action.type) {
    case "setMatchsFilterKeyword": {
      return {
        ...state,
        Matchs: {
          ...state.Matchs,
          ...{ keyword: action.payload.keyword }
        }
      } 
    }
    case "setMatchsFilterRating": {
      return {
        ...state,
        Matchs: {
          ...state.Matchs,
          ...{ rating: {order: action.payload.order} }
        }
      } 
    }
    case "setMatchsFilterTime": {
      return {
        ...state,
        Matchs: {
          ...state.Matchs,
          ...{ time: {order: action.payload.order} }
        }
      } 
    }
    case "setMatchsFilterPrice": {
      return {
        ...state,
        Matchs: {
          ...state.Matchs,
          ...{
            priceQuery: action.payload.priceQuery,
            priceOptionIndex: action.payload.priceOptionIndex,
          }
        },
      }
    }
    default: {
      return state;
    }
  }
}