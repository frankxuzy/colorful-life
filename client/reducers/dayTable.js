const dayTable = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ACTIVITY_FROM_DB':
      return [...action.hoursData]
    
    case 'UPDATE_ACTIVITY_OF_ONE_HOUR':
      const index = state.findIndex(hourData => hourData.hour === action.hourData.hour)
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {activity: action.hourData.activity}),
        ...state.slice(index + 1)
      ]  
    default:
      return state  
  }
}

export default dayTable
