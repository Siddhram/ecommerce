import React from 'react'
import { Outlet } from 'react-router-dom'
import Shopingviewheder from './Shopingviewheder'

const Shopinglayout = () => {
  return (
    <div className=' flex flex-col bg-white overflow-hidden'>
        {/*heder */}
        <Shopingviewheder/>
      <main className=' flex flex-col w-full'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Shopinglayout
