import React from 'react'
import { Link } from 'react-router-dom';
import { RiPlaneLine } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";
import { VscDebugStackframeDot } from "react-icons/vsc";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function OrderHistory() {
  return (
    <>
      <div className='bg-white md:ml-10 md:w-3/4 h-full  '>
        <div className=' p-3 drop-shadow-md bg-white rounded-md mb-4'>
          <h1 className='text-lg font-semibold'>Riwayat Pesanan</h1>
          <p className=' text-sm mt-3'>Menampilkan riwayat perjalananmu baru-baru ini.</p>
        </div>
        {/* Order Details */}
        <div className='bg-slate-200 p-3 mt-4 rounded-md flex flex-col gap-3'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-3 mb-3'>
              <RiPlaneLine className='text-primary' /><span className='text-base'>Pesawat</span>
            </div>
            <div>
              <button>
                <BiDotsVerticalRounded />
              </button>
            </div>
          </div>
          <p className='text-sm'>Order ID : 1292383409</p>
          <div className='flex items-center gap-3 font-semibold'>
            <h1 className=''>Jakarta</h1> <HiArrowRight /> <h1>Denpasar</h1>
          </div>
          <div className='flex flex-wrap gap-5 gap-y-1 '>
            <div className='flex items-center'>
              <p>Sekali Jalan</p><VscDebugStackframeDot /> <p>1 dewasa</p>
            </div>
            <span className='hidden md:inline-block'>|</span>
            <div className='flex items-center'>
              <p>Sel, 29 Nov 2022</p> <VscDebugStackframeDot />  <p>15.45</p>
            </div>
          </div>
          <div className='flex justify-between mt-5'>
            <span className=' text-slate-400 px-3 p-1 rounded-lg text-sm'>Pesanan Kadaluwarsa</span>
            <Link className='text-secondary font-medium hover:text-primary'> Lihat Detail</Link>
          </div>
        </div>
      </div >

    </>
  )
}
