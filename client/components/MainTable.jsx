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
    this.gotoPreviousMonth = this.gotoPreviousMonth.bind(this)
    this.gotoNextMonth = this.gotoNextMonth.bind(this)
  }

  gotoPreviousMonth () {
    const year = this.state.year
    const previousMonth = this.state.month - 1
    if (previousMonth >= 0) {
      this.setState({
        year,
        month: previousMonth
      })
    } else {
      this.setState({
        year: year - 1,
        month: 11
      })
    }
  }

  gotoNextMonth () {
    const year = this.state.year
    const nextMonth = this.state.month + 1
    // month from 0 ~ 11
    if (nextMonth < 12) {
      this.setState({
        year,
        month: nextMonth
      })
    } else {
      this.setState({
        year: year + 1,
        month: 0
      })
    }
  }

  render() {
    return (
      <div>
        <div className='tablehead'>
          <button onClick={this.gotoPreviousMonth} className='tablehead-btn'>{"<<"}</button>
          <span className='tablehead-span'>{`${utils.getMonthStr(this.state.month)} ${this.state.year}`}</span>
          <button onClick={this.gotoNextMonth} className='tablehead-btn'>{">>"}</button>
        </div>
        <div className="grid-calendar">
          <div className="row calendar-week-header">
            <WeekTable weekday={utils.weekDayArr()}/>
          </div>
            <DateTable
              year = {this.state.year}
              month = {this.state.month}
              dateGridArr={utils.dateGridGenerator(this.state.year, this.state.month)} />
        </div>
      </div>
    )
  }
}

export default MainTable