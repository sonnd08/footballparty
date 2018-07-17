
export default function reducer(state = {
  Matchs: { 
    keyword: '',
    priceQuery: {$gte: 0},
    price1: null,
    price2: null,
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
    case "setMatchsFilterPrice": {
      return {
        ...state,
        Matchs: {
          ...state.Matchs,
          ...{
            priceQuery: action.payload.priceQuery,
            price1: action.payload.price1,
            price2: action.payload.price2,
          }
        },
      }
    }
    default: {
      return state;
    }
  }
}