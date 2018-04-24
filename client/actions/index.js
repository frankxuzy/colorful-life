
export const  addActivitiesFromDb = (hour, activity, tag) => {
 return {
  type: 'UPDATE_ACTIVITIES_FROM_DB',
  hour,
  activity,
  tag 
 }
}  

