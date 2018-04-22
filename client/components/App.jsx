import React from 'react'

import Header from './Header'
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
        <div className="container">
          <h1 className="header">Colorful Life</h1>    
          <Header />
          <MainTable />
        </div>  
      </div>
    )
  }
}

export default App
