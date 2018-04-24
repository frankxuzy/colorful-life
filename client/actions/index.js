
export const  addActivitiesFromDb = (hour, activity, tag) => {
 return {
  type: 'UPDATE_ACTIVITY_FROM_DB',
  hour,
  activity,
  tag 
 }
}  

