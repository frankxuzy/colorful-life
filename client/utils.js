
const date = new Date()
const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]

const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] 

function getYear() {
  return date.getFullYear()
}

function getMonth() {
  return months[date.getMonth()]
}

function weekDayArr() {
  return weekDay
}

// give year and month. return how many days of this month 
// and the first day of this month is what day of a week
function generateMonthTable() {
  const year = getYear()
  const month = date.getMonth()
  const daysOfMonth = new Date(year, month, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()
  return {daysOfMonth, firstDay}
}

module.exports = {
  getYear,
  getMonth,
  weekDayArr,
  generateMonthTable
}