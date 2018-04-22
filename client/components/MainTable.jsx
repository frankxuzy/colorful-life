import React from 'react'
import utils from '../utils'

import WeekTable from './WeekTable'
import DateTable from './DateTable'
const monthInfo = utils.dateGridGenerator()

class MainTable extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  render() {
    return (
        <div className="grid-calendar">
          <div className="row calendar-week-header">
            <WeekTable weekday={utils.weekDayArr()}/>
          </div>
            <DateTable dateGridArr={utils.dateGridGenerator()} />
        </div>
    )
  }
}

export default MainTable