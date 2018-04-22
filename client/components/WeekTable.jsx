import React from 'react'

class WeekTable extends React.Component {
  constructor(props) {
    super (props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="weektable">
        {
          // why I cannot use forEach here?
          this.props.weekday.map(day => {
          return (
            <div key={day} className="col-xs-1 grid-cell"><div><div><span>{day}</span></div></div></div>
              )
            }
          )
        }
      </div>
    )
  }
}

export default WeekTable
