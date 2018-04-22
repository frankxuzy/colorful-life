import React from 'react'
import utils from '../utils'

import WeekTable from './WeekTable'
import DateTable from './DateTable'
const monthInfo = utils.dateGridGenerator()

class MainTable extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      year: utils.getYear(),
      month: utils.getMonth()
    }
  }

  render() {
    return (
      <div>
        <div className='tablehead'>
          <button className='tablehead-btn'>{"<<"}</button>
          <span className='tablehead-span'>{`${utils.getMonthStr(this.state.month)} ${this.state.year}`}</span>
          <button className='tablehead-btn'>{">>"}</button>
        </div>
        <div className="grid-calendar">
          <div className="row calendar-week-header">
            <WeekTable weekday={utils.weekDayArr()}/>
          </div>
            <DateTable dateGridArr={utils.dateGridGenerator()} />
        </div>
      </div>
    )
  }
}

export default MainTable