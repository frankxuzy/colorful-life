import React from 'react'
import {connect} from 'react-redux'

import {handleTag} from '../utils'
import {findAndUpdateActivity} from '../actions'
import {updateDayTable} from '../apiClient'

class HourTable extends React.Component {
  constructor(props) {
    super(props)
    this.updateActivity = this.updateActivity.bind(this)
  }

  updateActivity(e) {
    let activity = e.currentTarget.value
    if (e.keyCode === 13) {
      const updatedData = {
        date: this.props.hourData.date,
        hour: this.props.hourData.hour,
        activity
      }
      updateDayTable(updatedData)
        .then((res) => {
          if(res.status === 200) {
            this.props.dispatch(findAndUpdateActivity(updatedData, this.props.hourData))
          }
        })
    }
  }

  render() {
    return (
      <tbody className="hourtable">
        
        <tr className="">
          <th scope="row">{this.props.hourData.hour}</th>
          <td><input onKeyUp={e => this.updateActivity(e)} className="activity-input" type="text" defaultValue={this.props.hourData.activity}/></td>
          <td>{handleTag(this.props.hourData.tag)}</td>
        </tr>
      </tbody>
    )
  }
}


export default connect()(HourTable)


{/* <tr className="bg-primary">
          <th scope="row">6</th>
          <td><input className="activity-input" type="text" value="test"/></td>
          <td>Guilt free play</td>
        </tr>
        <tr className="bg-success">
          <th scope="row">7</th>
          <td>Jacob</td>
          <td>Rest</td>
        </tr>
        <tr className="bg-warning">
          <th scope="row">8</th>
          <td>Jacob</td>
          <td>Quality work</td>
        </tr>
        <tr className="bg-info">
          <th scope="row">9</th>
          <td>Mark</td>
          <td>Mandatory work</td>
        </tr>
        <tr className="bg-danger">
          <th scope="row">10</th>
          <td>Jacob</td>
          <td>Procrastination</td>
        </tr> */}