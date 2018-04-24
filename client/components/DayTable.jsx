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
      <div className="DayTable">
      <h1>{this.state.date}</h1>
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
            <tbody>
              <tr className="bg-primary">
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
              </tr>
              <tr className="">
                <th scope="row">11</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">15</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">16</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">17</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">18</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">19</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">20</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">21</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">22</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">23</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
            </tbody>
          </table>

        {/* <form action="/" method="post"></form> */}
      </div>
    )
  }
}

export default DayTable