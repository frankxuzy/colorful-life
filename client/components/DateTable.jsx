import React from "react"

class DateTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  // className previous-month next-month
  render() {
    return (
      <div className="datetable">
        <div className="row calendar-week">
          {
            this.props.dateGridArr[0].map((date, index) => 
              (<div key={index} className="col-xs-1 grid-cell previous-month"><div><div><span>{date}</span></div></div></div>)
            )
          }
        </div>

        <div className="row calendar-week">
        {
            this.props.dateGridArr[1].map((date, index) => 
              (<div key={index} className="col-xs-1 grid-cell"><div><div><span>{date}</span></div></div></div>)
            )
          }
        </div>

        <div className="row calendar-week">
        {
            this.props.dateGridArr[2].map((date, index) => 
              (<div key={index} className="col-xs-1 grid-cell next-month"><div><div><span>{date}</span></div></div></div>)
            )
          }
        </div>
      </div>
    )
  }
}

export default DateTable
