import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom';
import './page.css'
const Assitants = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex p-6 gap-3 items-center'>
          <FaChevronLeft className='text-2xl'/>
          <h2 className='text-4xl'>CMCTS QA</h2>
        </div>
        <div className='p-6'>
          <FaUserCircle className='text-4xl'/>
        </div>
      </div>
      <hr style={{ borderTop: '2px solid gray', margin: '0px 0px', justifyItems: 'center' }} />
      <div>
        <div className='p-4'>
          <div className='flex justify-between p-4'>
            <div className='flex gap-4 px-2'>
              <Link to={'wishlist-admin'} className='text-xl hover:border-b-red-500 hover:border-b-2 p-2 cursor-pointer'>Role</Link>
              <Link to={'admin-bot'} className='text-xl hover:border-b-red-500 cursor-pointer hover:border-b-2 p-2'>Assitant Infomation</Link>
              <Link className='text-xl hover:border-b-red-500 cursor-pointer hover:border-b-2 p-2'>Setting</Link>
            </div>
            <div>
              <button className='p-4 bg-red-500 rounded-md text-white font-semibold text-lg'>Add Role +</button>
            </div>
          </div>
        </div>
        <main className='p-2 h-full min-h-[calc(100vh-200px)] overflow-y-scroll'>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Assitants