import React from 'react'
import content1 from '../../assets/content_1.png'
import pict1 from '../../assets/transaction.png'
import pict2 from '../../assets/invoice.png'
import pict3 from '../../assets/digital-wallet.png'
import pict4 from '../../assets/lock.png'
import CityDestination from './CityDestination'

export default function Homepage (){
  return (
    <div>
      <CityDestination/>
      <div className='bg-color6 p-10'>
        <div className='flex flex-row md:w-3/4 w-full mx-auto'>
          <div>
            <img src={content1} alt='' className='w-[500px] h-[360px] py-3 px-1'></img>
          </div>
          <div className='mt-10 ml-5'>
            <h2 className='text-[30px] font-bold py-3 px-4 ml-5'>Get Flight Tickets to Your Favorite Destinations</h2>
            <p className='w-[600px] ml-8 text-justify'>Want to go on vacation with your family? Now, you can directly order flight tickets at Flyket. 
                  Flyket always provides reliable innovations to make it easier for you when ordering flight tickets online. 
                  Search for airline tickets online at Flyket to domestic and international flight destinations around the world. 
                  You can check flight ticket prices online at Flyket, as well as compare flight schedules directly via online.
            </p>
          </div>
        </div>
      </div>
      <div className='p-10 px-[100px]'>
        <h2 className='font-bold text-[28px] p-5 mb-5 text-center'>Why Using Flyket?</h2>
        <div className='flex flex-row justify-between mb-10'>
          <div>
            <img src={pict1} alt='' className='w-[100px] py-5 mx-auto'/>
            <h2 className='font-bold text-xl text-center'>Transaction from Anywhere</h2>
            <p className='w-[300px] text-center'>Make a transaction from anywhere at any time, from desktop, mobile app, or mobile web.</p>
          </div>
          <div>
            <img src={pict2} alt='' className='w-[100px] py-5 mx-auto'/>
            <h2 className='font-bold text-xl text-center'>Get Your Invoice</h2>
            <p className='w-[300px] text-center'>Get an invoice for payment of your order to avoid misunderstandings in the future.</p>
          </div>
          <div>
            <img src={pict3} alt='' className='w-[100px] py-5 mx-auto'/>
            <h2 className='font-bold text-xl text-center'>Ease of Payment</h2>
            <p className='w-[300px] text-center'>Payment for transactions is easy because you can use digital wallets and offline payment outlets.</p>
          </div>
          <div>
            <img src={pict4} alt='' className='w-[100px] py-5 mx-auto'/>
            <h2 className='font-bold text-xl text-center'>Secure Transaction</h2>
            <p className='w-[300px] text-center'>The security of data and transactions is guaranteed so you don't have to worry about using Flyket.</p>
          </div>
        </div>
      </div>
    </div>
  )
}