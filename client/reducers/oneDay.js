import utils from '../utils'
const initState = utils.getInitDayArr()
const oneDay = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVITIES_FROM_DB':
      const index = state.findIndex(hourData => hourData.hour === action.hour)
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], action.activity, action.tag),
        ...state.slice(index + 1)
      ]
  }
}

export default oneDay
