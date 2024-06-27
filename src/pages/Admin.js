import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6';
import { RiBilibiliFill } from 'react-icons/ri';
import { Outlet } from 'react-router-dom'
import { RiRobot3Fill } from "react-icons/ri";
import { US } from 'country-flag-icons/react/3x2'
const Admin = () => {
  const [data, setData] = useState();
  const [dataBot, setDataBot] = useState([{
        id: 1, 
        icon: <RiBilibiliFill className='text-6xl p-1 text-black' />, 
        name: 'CMCTS QA'
  }]);
  return (
    <div className='min-h-[calc(100vh)]  md:flex hidden bg-frontend'>
        <div className='h-full max-w-md'>
          <aside className='min-h-full w-96 mx-auto pt-12 px-10'>
            <div className=''>
                {
                    dataBot.map((bot) => (
                        <div key={bot.id} className='flex gap-3 text-center items-center pb-8 hover:cursor-pointer' > 
                            {bot.icon}
                            <h2 className='font-semibold text-3xl'>{bot.name}</h2>
                        </div>
                    ))
                }
                <div className='flex gap-4 px-4 py-2 hover:bg-white cursor-pointer hover:rounded-md'>
                  <RiRobot3Fill className='text-3xl'/>
                  <p className='text-xl'>Assitant Settings</p>
                </div>
                <div className='flex gap-4 text-center px-4 py-2'>
                    <US className='w-8 h-8'/>
                    <p className='text-xl'>English</p>
                </div>
            </div>
          </aside>
        </div>
        <main className='w-full h-full bg-white min-h-[calc(100vh)]'>
          <Outlet/>
        </main>
    </div>
  )
}

export default Admin