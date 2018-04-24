import React from 'react'
import {getOneDay} from '../apiClient'

class DayTable extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      date: Number(this.props.match.params.date),
      activities: []
    }
  }

  componentDidMount() {
    getOneDay(this.state.date)
      .then(day => {
        this.setState({
          activities: [...day]
        })
      })
  }
 
  
  render () {
    return (
      <div>
        <h1>{this.state.date}</h1>
        <ul>
          {this.state.activities.map(activity => (
            <li>hour: {activity.hour} activity: {activity.activity} tag: {activity.tag}</li>
          ))}
        </ul>

        {/* <form action="/" method="post"></form> */}
      </div>
    )
  }
}

export default DayTable
