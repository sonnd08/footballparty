export function setMatchsFilterKeyword(keyword){
  return{
    type:"setMatchsFilterKeyword",
    payload:{keyword}
  }
}
export function setMatchsFilterRating(order){
  return{
    type:"setMatchsFilterRating",
    payload:{order}
  }
}

export function setMatchsFilterTime(order){
  order*=1;
  return{
    type:"setMatchsFilterTime",
    payload:{order}
  }
}
export function setMatchsFilterPrice(price1, price2, priceOptionIndex){
  let priceQuery;
  price1*=1;
  price2*=1;
  if(!price1 && !price2) priceQuery ={$gte: 0}
  if(!price1 && price2>0) priceQuery ={$lt: price2}
  if(price1>=0 && price2>price1) priceQuery ={$gte: price1,$lt: price2}
  if(price1 && !price2) priceQuery ={$gte: price1}

  return{
    type:"setMatchsFilterPrice",
    payload:{priceQuery, priceOptionIndex}
  }
}
