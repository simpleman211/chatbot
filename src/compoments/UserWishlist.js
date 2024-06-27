import React, { useState } from 'react';
import { LuPencilLine } from "react-icons/lu";
import "./Index.css";
import { Link, Outlet, useNavigate } from 'react-router-dom';

const UserWishlist = () => {
    const [isOn1, setIsOn1] = useState(false);
    const [isOn2, setIsOn2] = useState(false);

    const handleToggle1 = (event) => {
        setIsOn1(event.target.checked);
    };

    const handleToggle2 = (event) => {
        setIsOn2(event.target.checked);
    };

    const navigate = useNavigate();
    const goToRoleAdmin = () => {
        navigate('/admin/assitants-settings/role-admin'); // Điều hướng đến trang '/admin/wishlist-admin/role-admin'
    };

    return (
        <div>
            <div className='p-8 w-full h-52 border flex justify-between'>
                <div>
                    <p className='text-xl p-1'>WhiteList_User</p>
                    <p className='text-xl p-1'>White list users for using chat</p>
                    <div className='flex gap-3 pt-6 items-center justify-center'>
                        <h2 className='w-8 h-8 text-xl text-center rounded-full bg-green-400'>H</h2>
                        <p className='text-slate-500'>hungnguyen2d@nashtechglobal.com 21 Nov 2023, 12:21 PM</p>
                    </div>
                </div>

                <div className='flex gap-5 justify-center'>
                    <p className='text-xl'>{isOn1 ? "On" : "Off"}</p>
                    <label className="switch">
                        <input type="checkbox" checked={isOn1} onChange={handleToggle1} />
                        <span className="slider"></span>
                    </label>
                    <div onClick={goToRoleAdmin}>
                        <LuPencilLine className='text-2xl cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className='p-8 w-full h-52 mt-4 border flex justify-between'>
                <div>
                    <p className='text-xl p-1'>WhiteList_User</p>
                    <p className='text-xl p-1'>White list users for using chat</p>
                    <div className='flex gap-3 pt-6 items-center justify-center'>
                        <h2 className='w-8 h-8 text-xl text-center rounded-full bg-green-400'>H</h2>
                        <p className='text-slate-500'>hungnguyen2d@nashtechglobal.com 21 Nov 2023, 12:21 PM</p>
                    </div>
                </div>

                <div className='flex gap-5 justify-center'>
                    <p className='text-xl'>{isOn2 ? "On" : "Off"}</p>
                    <label className="switch">
                        <input type="checkbox" checked={isOn2} onChange={handleToggle2} />
                        <span className="slider"></span>
                    </label>
                    <LuPencilLine className='text-2xl cursor-pointer' />
                </div>
            </div>
            
            <Outlet/>
        
        </div>
    );
};

export default UserWishlist;
