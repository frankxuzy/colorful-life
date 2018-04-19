import React from 'react'
import {getMonth, getYear, generateMonthTable} from '../utils'
const monthInfo = generateMonthTable()

const DaysTable = () => {
  return (
    <div>
      <h1>{`${getMonth()} have ${monthInfo.daysOfMonth} days. First day is ${monthInfo.firstDay} `}</h1>
      <table>
        <thead>
          <tr>
            <td>S</td>
            <td>M</td>
            <td>T</td>
            <td>W</td>
            <td>Th</td>
            <td>F</td>
            <td>S</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DaysTable