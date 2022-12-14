import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { HiSpeakerphone } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { getNotification } from '../features/notif/NotifSlice'
import { fetchUser, getUser } from '../features/user/userSlice'


export const Notification = () => {

  const dispatch = useDispatch();

  const email = JSON.parse(localStorage.getItem("email"))
  const user = useSelector(getUser)

  const data = useSelector((state) => state.notification.notif);

  useEffect(() => {
    dispatch(getNotification(user.id))
    dispatch(fetchUser(email))
  }, [dispatch, email, user.id])
  return (
    <div>
        <Navbar/>
        <div className='lg:m-20 mb-10 mt-20 lg:w-3/4 w-full lg:mx-auto'>
            <div className='container bg-gray-100 rounded rounded-lg'>
                <p className='p-[20px] font-bold text-xl'>Notification</p> 
            </div>
            {data && data.map((item) => (
              <div className='bg-color5 cursor-pointer hover:bg-color6 border-b-2 border-slate-300 w-full'>
                <div className='flex flex-row gap-1 p-4'>
                  <div className='bg-primary rounded rounded-full my-auto'>
                    <HiSpeakerphone className='text-white text-xl m-2'/>
                  </div>
                  <div className='ml-3'>
                    <h5 className='font-bold text-base my-1'>{item.title}</h5>
                    <p className='text-sm text-slate-600 my-1'>{item.content}</p>
                    <p className='text-xs text-slate-400 mt-2'>{item.createdAt}</p>
                  </div> 
                </div>
              </div>
            ))}
        </div>
        <Footer/>
    </div>
  )
}
