import React from 'react'
import {connect} from 'react-redux'

import {getOneDay} from '../apiClient'
import HourTable from './HourTable'
import { showActivitiesFromDb } from '../actions';
import {getInitDayArr} from '../utils'

class DayTable extends React.Component {
  constructor (props) {
    super (props)
    // this.state = {
    //   date: Number(this.props.match.params.date),
    //   activities: []
    // }
  }

  componentDidMount() {
    const date = Number(this.props.match.params.date)    
    this.props.dispatch(
      showActivitiesFromDb(date)
    )
  }
 
  
  render () {

    return (
      <div className="DayTable">
        <h1>{Number(this.props.match.params.date)}</h1>
        <table className="table">
          <thead>
            <tr>
              <th style={{width: "10%"}} scope="col">Time</th>
              <th scope="col">Activity</th>
              <th style={{width: "20%"}} scope="col">Tag</th>
            </tr>
          </thead>
          {this.props.dayTable.map(hourData => {
            return <HourTable key={hourData.hour} hourData={hourData}/>
          })}
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dayTable: state.dayTable
  }
}

export default connect(mapStateToProps)(DayTable)