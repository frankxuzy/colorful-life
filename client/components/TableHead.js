import React from 'react'

import {getMonth, getYear} from '../utils'

const TableHead = () => {
  return (
    <div className='tablehead'>
      <button className='tablehead-btn'>{"<<"}</button>
      <span className='tablehead-span'>{`${getMonth()} ${getYear()}`}</span>
      <button className='tablehead-btn'>{">>"}</button>
    </div>

  )
}

export default TableHead
