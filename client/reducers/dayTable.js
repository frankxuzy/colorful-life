import utils from '../utils'
const initState = utils.getInitDayArr()
const dayTable = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVITIES_FROM_DB':
      const index = state.findIndex(hourData => hourData.hour === action.hour)
      const updatedObj = Object.assign({}, state[index], action.activity, action.tag)  
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
