import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import MainTable from './MainTable'
import AddActivities from './AddActivities'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  // componentDidMount () {

  // }

  render () {
    return (
      <Router>
        <div className='app'>
          <div className="container">
            <h1 className="header">Colorful Life</h1>    
            <Route exact path='/calendar' component={Header} />
            <Route exact path='/calendar' component={MainTable} />
            <Route exact path='/calendar/:date' component={AddActivities} />
          </div>  
        </div>
      </Router>
    )
  }
}

export default App
