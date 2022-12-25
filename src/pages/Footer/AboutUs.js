import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import about from '../../assets/e-ticket.png'

export const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <div className='mt-[90px] lg:ml-24'>
          <div className='lg:flex lg:flex-row lg:gap-24 lg:p-10'>
            <div>
              <h2 className='text-center font-bold lg:text-3xl text-2xl items-center'>About Flyket</h2>
              <p className='lg:w-[700px] w-[380px] text-justify lg:p-10 text-slate-500 lg:leading-8 m-6 leading-7'>
                Flyket is an online platform that allows users to purchase electronic flight tickets from various airlines. It is a convenient and hassle-free way to book flights and manage travel itineraries.<br/>
                Using Flyket, users can search for and compare flight options based on their preferences, such as destination, departure and arrival dates, number of passengers, and class of service. Once they have selected a flight, they can complete the booking process and pay for their tickets using a digital wallet or offline mitra.<br/>
                Flyket also offers a range of additional features and services, such as the ability to add extras like luggage or in-flight meals, and the option to purchase travel insurance. It is a user-friendly platform that makes it easy for travelers to plan and book their flights, all in one place.<br/>
              </p>
            </div>
            <div>
              <img src={about} alt='' className='lg:w-[400px] w-[200px] my-8 mx-auto'></img>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
