
// Wed Feb 28 2018 00:00:00 GMT+1300 (NZDT)
// const date = function(year = null, month=null, day = 0) {
//   return new Date(year, month, day)
// } 
const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]

const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] 
const totalGrids = 42
const totalDateRows = 6

function getYear() {
  return (new Date()).getFullYear()
}

function getMonth() {
  return (new Date()).getMonth()
}

function getMonthStr(month = getMonth()) {
  return months[month]
}

function weekDayArr() {
  return weekDay
}

function firstDay(year = getYear(), month = getMonth()) {
  return (new Date(year, month, 1)).getDay()
}
// give year and month. return how many days of this month 
// and the first day of this month is what day of a week
function lastDay(year = getYear(), month = getMonth()) {
  return (new Date(year, month + 1, 0)).getDate()
}

function dateGridGenerator(year = getYear(), month = getMonth()) {
  const dateArr = []
  const headPaddingArr = []
  const tailPaddingArr = []
  let lastDayOfLastMonth = lastDay(year, month - 1)
  // generate date array
  for (let i = 1; i <= lastDay(year, month); i++) {
    dateArr.push(i)
  }
  // generate head padding array
  for (let j = 0; j < firstDay(year, month); j++) {
    headPaddingArr.unshift(lastDayOfLastMonth)
    lastDayOfLastMonth--
  }
  // 42 grids in total
  // generate tail padding array
  const tailPaddingLength = totalGrids - lastDay(year, month) - headPaddingArr.length
  for (let k = 1; k <= tailPaddingLength; k++) {
    tailPaddingArr.push(k)
  }
  return [[...headPaddingArr], [...dateArr], [...tailPaddingArr]]
    // headPaddingLen: headPaddingArr.length,
    // tailPaddingLen: tailPaddingArr.length
}
// return [[dateRow1],[dateRow2],[dateRow3],[dateRow4],[dateRow5]]
// function dateRowWrapper (year = getYear(), month = getMonth()) {
//   const dateGridObj = dateGridGenerator(year, month)
//   const dateArr = dateGridObj.dateGrid
//   const headPaddingLen = dateGridObj.headPaddingLen
//   const tailPaddingLen = dateGridObj.tailPaddingLen
//   const dateRowArr = []
//   // 5 rows in total
//   for (let i = 0; i < totalDateRows; i++){
//     dateRowArr.push(dateArr.splice(0, 7))
//   }
//   return {dateRowArr, headPaddingLen, tailPaddingLen}
// }

module.exports = {
  getYear,
  getMonth,
  getMonthStr,
  weekDayArr,
  dateGridGenerator
}