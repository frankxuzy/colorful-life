import React from 'react'
import {handleTag} from '../utils'

class HourTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <tbody className="hourtable">
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
        <tr className="">
          <th scope="row">{this.props.hour}</th>
          <td><input onKeyUp={e => updateActivity(e)} className="activity-input" type="text" value={this.props.activity}/></td>
          <td>{handleTag(this.props.tag)}</td>
        </tr>
      </tbody>
    )
  }
}

export default HourTable
