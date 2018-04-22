import React from 'react'

class AddActivities extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>{this.props.match.params.date}</h1>
      </div>
    )
  }
}

export default AddActivities
