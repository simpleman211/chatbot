import React, { useState } from 'react'
import { RiBilibiliFill } from 'react-icons/ri';
import { MdOutlineSettingsEthernet } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { Outlet } from 'react-router-dom';

const AssitantsBot = () => {
    const [dataBot, setDataBot] = useState([{
        id: 1, 
        icon: <RiBilibiliFill className='text-8xl p-1 text-green-500' />, 
        name: 'CMCTS QA'
  }]);
  return (
    <div>
        {/* Bot Information */}
        <div className='p-4 border justify-between flex'>
        {
            dataBot.map((bot) => (
                <div key={bot.id} className='flex gap-3 text-center items-center hover:cursor-pointer'> 
                    {bot.icon}
                    <div>
                    <h2 className='font-semibold text-2xl'>{bot.name}</h2>
                    <p className='text-xl text-slate-500'>{bot.name}</p>
                    </div>
                </div>
            ))
        }
            <div className='h-full p-8'><MdOutlineSettingsEthernet className='text-4xl items-center justify-center my-auto'/></div>
        </div>
        {/* Tools */}
        <div className='pt-10'>
            <div className='w-full px-10 h-72 p-2 pt-5 border '>
                <div className='flex p-3 gap-3 w-full items-center rounded-sm bg-green-400'>
                    <BsTools className='text-2xl'/>
                    <p className='text-3xl'>Tools</p>
                </div>
                <div className='flex justify-between py-4 border-b-2'>
                    <div>
                        <h2 className='text-2xl'>Search Tools</h2>
                        <p className='text-slate-400'>Allow the bot to search in knowledge base</p>
                    </div>
                    <div className='flex gap-4 p-4'>
                        <p className='text-slate-400'>Enabled</p>
                        <MdOutlineSettingsEthernet className='text-2xl'/>
                    </div>
                </div>
                <div className='flex justify-between py-4'>
                    <div>
                        <h2 className='text-2xl'>Ticket Tools</h2>
                        <p className='text-slate-400'>Allow the bot to create ticket</p>
                    </div>
                    <div className='flex gap-4 p-4'>
                        <p className='text-slate-400'>Enabled</p>
                        <MdOutlineSettingsEthernet className='text-2xl'/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AssitantsBot