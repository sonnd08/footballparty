export function toggleUpcomingModal(matchDetail){
  return{
    type:"toggleUpcomingModal",
    payload:{matchDetail}
  }
}

export function toggleBookingModal(){
  return{
    type:"toggleBookingModal",
    payload:{}
  }
}
export function hideBookingModal(){
  return{
    type:"hideBookingModal",
    payload:{}
  }
}
export function toggleNextBookingStep(){
  return{
    type:"toggleNextBookingStep",
    payload:{}
  }
}