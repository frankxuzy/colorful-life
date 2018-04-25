import React from 'react'
import {connect} from 'react-redux'

import {getOneDay} from '../apiClient'
import HourTable from './HourTable'
import { showActivitiesFromDb } from '../actions';


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
          {/* {this.state.activities.map(activity => (
            <li>hour: {activity.hour} activity: {activity.activity} tag: {activity.tag}</li>
          ))} */}
          <table className="table">
            <thead>
              <tr>
                <th style={{width: "10%"}} scope="col">Time</th>
                <th scope="col">Activity</th>
                <th style={{width: "20%"}} scope="col">Tag</th>
              </tr>
            </thead>
            {this.props.dayTable.map(hourTable => {
              return <HourTable key={hourTable.hour} {...hourTable}/>
            })}
          </table>

        {/* <form action="/" method="post"></form> */}
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