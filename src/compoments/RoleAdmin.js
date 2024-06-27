import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { MdDeleteOutline } from "react-icons/md"

const RoleAdmin = () => {
  return (
    <div>
        <div className='h-full min-w-full min-h-full border-r border-l'>
            {/* Document Header */}
            <div className='flex w-full justify-between p-2'>
                <h2 className='text-2xl font-semibold'>Document</h2>
                <button className='p-2 border text-lg border-black rounded-md '>Add document +</button>
            </div>  
            {/* Document form */}
            <div className='h-52 px-4 py-2 w-full'>
                <div className='bg-slate-200 w-full h-full overflow-y-scroll'>
                    <div className='flex px-4 py-3 justify-between'>
                        <p>HCM_TRAINING _SCHEDULE_Jun2023.pdf</p>
                        <MdDeleteOutline className='text-2xl'/>
                    </div>
                    <div className='flex px-4 py-3 justify-between'>
                        <p>HCM_TRAINING _SCHEDULE_Jun2023.pdf</p>
                        <MdDeleteOutline className='text-2xl'/>
                    </div>
                    <div className='flex px-4 py-3 justify-between'>
                        <p>HCM_TRAINING _SCHEDULE_Jun2023.pdf</p>
                        <MdDeleteOutline className='text-2xl'/>
                    </div>
                    <div className='flex px-4 py-3 justify-between'>
                        <p>HCM_TRAINING _SCHEDULE_Jun2023.pdf</p>
                        <MdDeleteOutline className='text-2xl'/>
                    </div>
                    <div className='flex px-4 py-3 justify-between'>
                        <p>HCM_TRAINING _SCHEDULE_Jun2023.pdf</p>
                        <MdDeleteOutline className='text-2xl'/>
                    </div>
                    <div className='flex px-4 py-3 justify-between'>
                        <p>HCM_TRAINING _SCHEDULE_Jun2023.pdf</p>
                        <MdDeleteOutline className='text-2xl'/>
                    </div>
                </div>
            </div>
            {/* User and Group Header */}
            <div>
            <div className='flex w-full justify-between p-2'>
                <h2 className='text-2xl font-semibold'>User and Groups</h2>
                <div className='flex gap-4'>
                    <div className='flex border text-center items-center justify-center rounded-sm'>
                        <IoMdSearch className='ml-2 text-xl'/>
                        <input type='text' placeholder='Filter by user email or group name' className='w-72 text-center text-lg'/>
                    </div>
                    <button className='p-2 border text-lg border-black rounded-md '>Add document +</button>
                    <button className='p-2 border text-lg border-black rounded-md '>Add user +</button>
                </div>    
            </div> 
            </div>

            <div className='h-52 px-4 py-2 w-full'>
                <div className='bg-slate-200 w-full h-full overflow-y-scroll'>
                <div className='flex justify-between px-4 py-3 '>
                        <div className='flex gap-1 text-center justify-center items-center'>
                            <p className='px-2 py-1 rounded-full bg-green-400 mr-3'>M</p>
                            <p>HoangTien123@nastechglobal.com</p> 
                            {/* <div className='flex gap-1'>
                                <p>-</p>
                                <p className='text-slate-400'>Senior IT Suupport Engineer, IT</p>
                            </div> */}
                        </div>
                        <div className='flex'>
                            <MdDeleteOutline className='text-2xl text-center justify-center items-center'/>
                        </div>
                    </div>
                    <div className='flex justify-between px-4 py-3 '>
                        <div className='flex gap-1 text-center justify-center items-center'>
                            <p className='px-2 py-1 rounded-full bg-green-400 mr-3'>M</p>
                            <p>DungNguyenTien123@nastechglobal.com</p> 
                            <div className='flex gap-1'>
                                <p>-</p>
                                <p className='text-slate-400'>Senior IT Suupport Engineer, IT</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <MdDeleteOutline className='text-2xl text-center justify-center items-center'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoleAdmin