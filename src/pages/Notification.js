import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { HiSpeakerphone } from 'react-icons/hi'
import dataNotif from '../assets/data.json'

export const Notification = () => {

  const [data] = useState(dataNotif);
  return (
    <div>
        <Navbar/>
        <div className='m-20 w-3/4 mx-auto'>
            <div className='container bg-gray-100 rounded rounded-lg'>
                <p className='p-[20px]'>Notification</p> 
            </div>
            {data && data.map((item) => (
              <div className='bg-color5 cursor-pointer hover:bg-color6 border-b-2 border-slate-300'>
                <div className='flex flex-row gap-1 p-3'>
                  <div className='bg-primary rounded rounded-full my-auto'>
                    <HiSpeakerphone className='text-white text-xl m-2'/>
                  </div>
                  <div className='ml-3'>
                    <div className='flex flex-row space-x-[52rem]'>
                      <h5 className='font-bold text-base max-w-[200px]'>{item.title}</h5>
                      <p>{item.time}</p>
                    </div>
                    <p className='text-sm text-slate-600'>{item.content}</p>
                  </div> 
                </div>
              </div>
            ))}
        </div>
        <Footer/>
    </div>
  )
}
