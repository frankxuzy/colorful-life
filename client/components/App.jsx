import React from 'react'

import Header from './Header'
import MonthTable from './MonthTable'
import DaysTable from './DaysTable'

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
      <div className='app'>
        <Header />
        <MonthTable />
        <DaysTable />
      </div>
    )
  }
}

export default App
