import React, { useEffect, useRef, useState } from 'react';
import './page.css';
import { RiBilibiliFill } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaAngleRight, FaUserCircle } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { LiaRobotSolid } from "react-icons/lia";
import { IoNewspaperOutline, IoCloseSharp } from "react-icons/io5";
import { VN } from 'country-flag-icons/react/3x2';
import { GrCertificate } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { LuSendHorizonal } from "react-icons/lu";
import { assistants } from '../helper/assitants';
import './page.css';
import SummaryApi from '../common';

const Home = () => {
    const [openBot, setOpenBot] = useState(false);
    const [assistantID, setAssistantID] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userText, setUserText] = useState('');
    const [messages, setMessages] = useState([]);
    const [sending, setSending] = useState(false);
    const hourRef = useRef(null);
    const [dataBot, setDataBot] = useState([{
        id: 1,
        icon: <RiBilibiliFill className='text-6xl p-1 text-black' />,
        name: 'CMCTS QA'
    }]);
    const [selectBot, setSelectBot] = useState({});

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserText(value);
    };

    const handleSendMessage = async () => {
        if (userText.trim()) {
            setSending(true);
            setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: userText }]);
            setUserText('');
            try {
                const response = await fetch(SummaryApi.chatbotmess.url, {
                    method: SummaryApi.chatbotmess.method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: userText }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: data.response }]);
                setSending(false);
            } catch (error) {
                console.error('Lỗi khi gửi tin nhắn:', error);
                setSending(false);
            }
        }
    };

    const handleAssistantClick = (assistant) => {
        setAssistantID(assistant.id);
        setSelectBot([assistant]);
    };

    const handleCancel = () => {
        setOpenBot(false);
        setAssistantID(null);
    };

    const handleSelect = () => {
        setOpenBot(false);
        setDataBot(selectBot);
    };

    const setCurrentTime = () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let currentTime = hours + ':' + minutes + ' ' + ampm;
        if (hourRef.current) {
            hourRef.current.innerHTML = currentTime;
        }
    };

    useEffect(() => {
        setCurrentTime();
    }, []);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    return (
        <div className='min-h-[calc(100vh)] lg:flex md:flex hidden bg-frontend pt-11 pb-12'>
            <div className='w-full max-w-[20rem] '>
                <aside className='min-h-full w-fit mx-auto'>
                    {dataBot.map((bot) => (
                        <div key={bot.id} className='flex gap-3 text-center items-center pb-8 hover:cursor-pointer' onClick={() => setOpenBot(true)}>
                            {bot.icon}
                            <h2 className='font-semibold text-2xl'>{bot.name}</h2>
                            <FaAngleRight className='text-xl font-bold' />
                        </div>
                    ))}
                    <div className='p-2'>
                        <div className='flex items-center text-center gap-3 cursor-pointer'>
                            <MdOutlineDeleteForever className='text-3xl' />
                            <p className='text-xl'>Clear Chat History</p>
                        </div>
                        <hr style={{ borderTop: '2px solid gray', margin: '16px 0px', justifyItems: 'center' }} />
                        <div className='flex gap-3 items-center p-2 text-center cursor-pointer'>
                            <BsQuestionCircle className='text-2xl' />
                            <p className='text-xl'>FAQ</p>
                        </div>
                        <div className='flex gap-3 items-center p-2 text-center cursor-pointer'>
                            <LiaRobotSolid className='text-2xl' />
                            <p className='text-xl'>About BonBon</p>
                        </div>
                        <div className='flex gap-3 items-center p-2 text-center cursor-pointer'>
                            <IoNewspaperOutline className='text-2xl' />
                            <p className='text-xl'>Policy</p>
                        </div>
                        <div className='flex gap-3 items-center p-2 text-center cursor-pointer'>
                            <VN className='w-6 h-6' />
                            <p className='text-xl'>Viet Nam</p>
                        </div>
                        <div className='flex gap-3 bottom-10 absolute cursor-pointer'>
                            <GrCertificate className='text-7xl' />
                            <p className='text-xl'>Virtual Assistant <br /> at CMCTS</p>
                        </div>
                    </div>
                </aside>
            </div>
            <div>
                <p className='h-14 w-14 rounded-full bg-frontend absolute right-10 top-3 z-50'></p>
                <div className='rounded-full p-3 mix-blend-multiply text-3xl absolute right-10 top-3 z-50 '>
                    <FaUserCircle className='' />
                </div>
            </div>
            <main className='w-full mr-6 rounded-lg gap-3 bg-white min-h-[calc(100vh-200px)] max-h-[calc(100vh)] relative'>
                {loading ? (
                    <div>
                        <div className='loader justify-center items-center'></div>
                    </div>
                ) : (
                    <div className='h-full max-h-[85%]'>
                        <div className='pb-10 w-full p-4 max-w-[100%] h-full max-h-[100%] overflow-y-scroll'>
                            {messages.map((msg, index) => (
                                <div key={index + 1} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} pr-4 pt-2`}>
                                    {msg.sender === 'bot' && <RiBilibiliFill className='text-6xl p-1 text-black' />}
                                    <div className={`mt-2 p-2 ${msg.sender === 'user' ? 'bg-blue-300' : 'bg-blue-200'} rounded-lg`}>
                                        {msg.text}
                                    </div>
                                    {msg.sender === 'user' && <FaUserCircle className='text-3xl' />}
                                </div>
                            ))}
                        </div>
                        <div className=''>
                            <div className='flex'>
                                <div className='input-container flex-grow'>
                                    <input
                                        className='p-4 border rounded-md border-black input-text-user'
                                        name='message'
                                        value={userText}
                                        type='text'
                                        placeholder='Type your message'
                                        onChange={handleOnChange}
                                        onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
                                        disabled={sending}
                                    />
                                    <LuSendHorizonal className='z-50 relative right-12 text-2xl hover: cursor-pointer btn-submit' onClick={handleSendMessage} />
                                </div>
                            </div>
                            <div className='absolute text-center right-72'>
                                <div className='flex justify-center items-center text-center gap-2'>
                                    <RiErrorWarningLine className='text-slate-500 text-lg' />
                                    <p className='italic text-slate-500'>This AI generated content may not be 100% accurate. Use at your own risk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            {openBot && (
                <div className='w-full h-full fixed bg-slate-300 bg-opacity-70 z-50 flex top-0 right-0 bottom-0 left-0 justify-center items-center'>
                    <div className='bg-white max-w-2xl w-full h-full max-h-[60%] overflow-hidden p-2 rounded pb-0'>
                        <div>
                            <IoCloseSharp className='ml-auto text-4xl text-slate-400 hover:cursor-pointer hover:text-red-500' onClick={handleCancel} />
                            <h2 className='font-bold text-slate-700 text-4xl p-0 px-4'>Select your assistant</h2>
                        </div>
                        <div className='grid grid-cols-2 w-full gap-2 max-w-[95%] h-full max-h-[50%] mt-4 mx-auto'>
                            {assistants.map((assistant) => (
                                <div key={assistant.id} className={`flex w-full text-center items-center hover:border hover:border-black cursor-pointer hover:rounded-md ${assistantID === assistant.id ? 'border border-black rounded-md' : ''}`} onClick={() => handleAssistantClick(assistant)}>
                                    {assistant.icon}
                                    <h2 className='font-semibold text-xl'>{assistant.name}</h2>
                                </div>
                            ))}
                        </div>
                        <div className='absolute'>
                            <div className='flex gap-2 p-4 pl-[26rem] right-0'>
                                <button className='p-3 px-5 justify-center items-center text-center rounded-md border border-black text-xl font-semibold' onClick={handleCancel}>Cancel</button>
                                <button className='p-3 px-5 justify-center items-center text-center rounded-md text-white bg-red-500 border border-red-500 text-xl font-semibold' onClick={handleSelect}>Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
