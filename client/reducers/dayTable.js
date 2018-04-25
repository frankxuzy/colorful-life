import utils from '../utils'
const initState = utils.getInitDayArr()
const dayTable = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_ACTIVITY_FROM_DB':
      const index = state.findIndex(
        hourData => hourData.hour === action.hour
      )
      const updatedObj = Object.assign(
        {}, 
        state[index], 
        {activity: action.activity, tag: action.tag}
      )  
      return [
        // cannot use splice cuz it will mutate the original array
        // state.splice(index, 1 ,updatedObj)
        ...state.slice(0, index),
        updatedObj,
        ...state.slice(index + 1)
      ]
    
    default:
      return state  
  }
}

export default dayTable
