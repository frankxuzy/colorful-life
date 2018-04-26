import {getOneDay} from '../apiClient'
import {getInitDayArr} from '../utils'

export const fetchActivitiesFromDb = (hoursData) => {
 return {
  type: 'FETCH_ACTIVITY_FROM_DB',
  hoursData
 }
}

export const updateActivityOfOneHour = (hourData) => {
  return {
    type: 'UPDATE_ACTIVITY_OF_ONE_HOUR',
    hourData
  }
}
// to do: try to use async function 
// https://stackoverflow.com/questions/35530547/async-actions-in-redux

export const showActivitiesFromDb = (date) => { 
  const dayData = getInitDayArr(date)  
  return (dispatch) => {
    return getOneDay(date)
    .then(hoursData => {
      hoursData.map((hourData) => {
        const index = dayData.findIndex(
          initHourData => hourData.hour === initHourData.hour
        )
        if(index !== -1) {
          dayData[index].id = hourData.id
          dayData[index].activity = hourData.activity
          dayData[index].tag = hourData.tag
        }
      })
      //need inside the promise so we can get the updated dayData
      dispatch(fetchActivitiesFromDb(dayData))      
    })
    // .catch(err => {
    //   dispatch(showError(error.message))
    // })
  }
}

export const findAndUpdateActivity = (updatedData, hourData) => {
  hourData.activity = updatedData.activity
  return (dispatch) => {
    dispatch(updateActivityOfOneHour(hourData))
  }
}