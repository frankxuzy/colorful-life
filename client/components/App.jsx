import React from 'react'

import Header from './Header'
import TableHead from './TableHead'
import MainTable from './MainTable'

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
        <TableHead />
        <MainTable />
      </div>
    )
  }
}

export default App
