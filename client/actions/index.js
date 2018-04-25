import {getOneDay} from '../apiClient'
import {getInitDayArr} from '../utils'

export const fetchActivitiesFromDb = (hoursData) => {
 return {
  type: 'FETCH_ACTIVITY_FROM_DB',
  hoursData
 }
}  

export function showActivitiesFromDb(date){ 
  const dayData = getInitDayArr()  
  return (dispatch) => {
    return getOneDay(date)
    .then(hoursData => {
      hoursData.map((hourData) => {
        const index = dayData.findIndex(
          initHourData => hourData.hour === initHourData.hour
        )
        if(index !== -1) {
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