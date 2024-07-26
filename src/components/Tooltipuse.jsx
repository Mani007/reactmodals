import React from 'react'
import MyTooltip from './MyTooltip'

function Tooltipuse() {
  return (
    <>
    <MyTooltip tooltip="this is my tooltip running">
        <button className='bg-red-500 text-white p-3 rounded'>Hover Me</button>
    </MyTooltip>
    </>
  )
}

export default Tooltipuse