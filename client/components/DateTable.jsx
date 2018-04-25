import React from "react"
import {Link, withRouter} from 'react-router-dom'


class DateTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.showDayActivity = this.showDayActivity.bind(this)
  }

  showDayActivity(day) {
    const yearStr = this.props.year.toString()
    const monthStr = (() => {
      if(this.props.month + 1 < 10) {
        return 0 + (this.props.month + 1).toString()
      } else {
        return (this.props.month + 1).toString()
      }
    })()
    const dayStr = (() => {
      if(Number(day) < 10) {
        return 0 + day.toString()
      } else {
        return day.toString()
      }
    })()
    const date = yearStr + monthStr + dayStr
    this.props.history.push(`/calendar/${date}`)
  }
  // className previous-month next-month
  render() {
    return (
      <div className="datetable">
        <div className="row calendar-week">
          {
            this.props.dateGridArr[0].map((day, index) => 
              (<div key={index} onClick={() => this.showDayActivity(day)} className="col-xs-1 grid-cell previous-month"><div><div><span>{day}</span></div></div></div>)
            )
          }
        {
            this.props.dateGridArr[1].map((day, index) => 
              (<div key={index} onClick={() => this.showDayActivity(day)} className="col-xs-1 grid-cell"><div><div><span>{day}</span></div></div></div>)
            )
          }
        {
            this.props.dateGridArr[2].map((day, index) => 
              (<div key={index} onClick={() => this.showDayActivity(day)} className="col-xs-1 grid-cell next-month"><div><div><span>{day}</span></div></div></div>)
            )
          }
        </div>
      </div>
    )
  }
}

export default withRouter(DateTable)

