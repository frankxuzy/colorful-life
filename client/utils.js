
const date = new Date()
const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]

export function getYear() {
  return date.getFullYear()
}

export function getMonth() {
  return months[date.getMonth()]
}

// give year and month. return how many days of this month 
// and the first day of this month is what day of a week
export function generateMonthTable() {
  const year = getYear()
  const month = date.getMonth()
  const daysOfMonth = new Date(year, month, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()
  return {daysOfMonth, firstDay}
}