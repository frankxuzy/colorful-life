const dayTable = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ACTIVITY_FROM_DB':
      return [...action.hoursData]
    
    default:
      return state  
  }
}

export default dayTable
