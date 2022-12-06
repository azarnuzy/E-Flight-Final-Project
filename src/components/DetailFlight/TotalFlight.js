import React from 'react'
import { RiRefund2Fill } from "react-icons/ri";
import { GrSchedule } from "react-icons/gr";

function TotalFlight() {
    return (
        <div className='md:w-full border p-2 rounded-md '>
            <span className='font-bold text-base'>Penerbangan</span>
            <div className='flex justify-between my-5'>
                <p className='font-semibold text-sm'>Jakarta -> Yogyakarta</p>
                <p className='text-cyan-600 font-semibold'>Detail</p>
            </div>
            <div className='mt-2 mb-2'>
                <h1 className='font-semibold'>Kebijakan Tiket</h1>
                <div className='flex items-center gap-3 my-3'>
                    <RiRefund2Fill />
                    <span className='text-sm'>Bisa refund</span>
                </div>
                <div className='flex items-center gap-3 my-3'>
                    <GrSchedule />
                    <span className='text-sm'>Bisa reschedule</span>
                </div>
            </div>
            <div className='border rounded-md text-sm px-1 py-2 mb-3 mt-2 shadow'>
                <p>Kamu mendapatkan diskon IDR 4.000 untuk pemesanan ini</p>
            </div>
            <hr />
            <div className='flex justify-between gap-3 my-2 mb-2'>
                <div>
                    <h4 className='font-bold'>Total Pembayaran</h4>
                </div>
                <div>
                    <h4 className='font-semibold text-sky-700'>IDR 520.480</h4>
                </div>
            </div>
        </div>
    )
}

export default TotalFlight