import React from 'react'

import {getMonth, getYear} from '../utils'

const TableHead = () => {
  return (
    <div className='monthtable'>
      <h2>{`${getMonth()} ${getYear()}`}</h2>
      <button>{"<<"}</button>
      <button>{">>"}</button>
    </div>

  )
}

export default TableHead