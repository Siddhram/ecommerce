import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminsidebar from './Adminsidebar'
import Adminheder from './Adminheder'

const Adminlayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
        <Adminsidebar/>
      <div className='flex flex-1 flex-col'>
              <Adminheder/>
         <main className=' flex flex-1  bg-muted/40 p-4 md:p-6'>
         <Outlet/>
         </main>
      </div>
    </div>
  )
}

export default Adminlayout
