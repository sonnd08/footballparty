
export default function reducer(state = {
  Matchs: {
    keyword: '',
    priceQuery: { $gte: 0 },
    priceOptionIndex: "0",
    rating: {
      order: -1
    },
    time: {
      order: -1
    }
  },
  Grounds: {
    keyword: '',
    price: {
      priceQuery: { $gte: 0 },
      priceOptionIndex: "0",
    },
    rating: '0'
  }
}, action) {
  // console.log('filter action');
  // console.log(action);
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
          ...{ rating: { order: action.payload.order } }
        }
      }
    }
    case "setMatchsFilterTime": {
      return {
        ...state,
        Matchs: {
          ...state.Matchs,
          ...{ time: { order: action.payload.order } }
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
    case "setGroundsFilterPrice": {
      return {
        ...state,
        Grounds: {
          ...state.Grounds,
          ...{
            price: {
              priceQuery: action.payload.priceQuery,
              priceOptionIndex: action.payload.priceOptionIndex,
            }
          }
        },
      }
    }
    case "setGroundsFilterKeyword": {
      return {
        ...state,
        Grounds: {
          ...state.Grounds,
          ...{ keyword: action.payload.keyword }
        }
      }
    }
    case "setGroundsFilterRating": {
      return {
        ...state,
        Grounds: {
          ...state.Grounds,
          ...{ rating: action.payload.rating }
        }
      }
    }
    default: {
      return state;
    }
  }
}