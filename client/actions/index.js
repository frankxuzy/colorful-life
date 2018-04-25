import {getOneDay} from '../apiClient'

export const fetchActivitiesFromDb = (hour, activity, tag) => {
 return {
  type: 'FETCH_ACTIVITY_FROM_DB',
  hour,
  activity,
  tag 
 }
}  


export const showActivitiesFromDb = (date) => {
  return (dispatch) => {
    getOneDay(date)
      .then(hoursData => {
        hoursData.map((hourData) => 
          dispatch(
            fetchActivitiesFromDb(
              hourData.hour, 
              hourData.activity, 
              hourData.tag)
          )
        )
      })
  }
}