import React from 'react'
import logo from '../imgs/a1.jpeg'

export default function Workblock() {
  return (
    <div className=" p-3 col-md-6 col-xl-3 p-md-4">
      <div className='work-item bg-danger rounded-4'>
        <img src={logo} className='w-100 ' alt="" />
      </div>
    </div>
  )
}
