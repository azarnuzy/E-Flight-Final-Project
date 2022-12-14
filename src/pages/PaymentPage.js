import React from 'react'
import { BiArrowFromRight } from 'react-icons/bi'
import { BsArrowBarLeft } from 'react-icons/bs'
import DetailPemesanan from '../components/DetailFlight/DetailPemesanan'
import TotalFlight from '../components/DetailFlight/TotalFlight'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { SlArrowRight } from "react-icons/sl";

export const PaymentPage = () => {
  return (
    <div>
			<Navbar />
			<div className='md:flex gap-3 md:max-w-[1024px] mx-auto md:mt-24 p-2 '>
				<div className='md:w-2/3'>
                    <div className='bg-white md:ml-10 mb-2 p-3'>
                        <h5 className='font-semibold text-xl'>Metode Pembayaran</h5>
                    </div>
                    <div className='bg-white md:ml-10 border rounded-md mb-5 p-3 -mt-2'>
                        <h5 className='font-semibold'>Rekomendasi Metode Pembayaran</h5>
                        <p className='text-sm mt-1 font-extralight'>Nikmati benefit ekstra dengan metode pembayaran rekomendasi dari Flyket.com</p>
                    </div>
                    <div className='bg-white md:ml-10 border rounded-md mb-5 p-3 -mt-2'>
                        <h5 className='font-semibold'>Kartu Kredit/Debit</h5>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>Kartu Kredit</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <p className='mt-4 pt-4 border-slate-200 border-t-2'>Kartu Debit</p>
                    </div>
                    <div className='bg-white md:ml-10 border rounded-md mb-5 p-3 -mt-2'>
                        <h5 className='font-semibold'>Cicilan Tanpa Kartu Kredit</h5>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>Kredivo</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <p className='mt-4 pt-4 border-slate-200 border-t-2'>Akulaku</p>
                    </div>
                    <div className='bg-white md:ml-10 border rounded-md mb-5 p-3 -mt-2'>
                        <h5 className='font-semibold'>Transfer Bank</h5>
                        <p className='text-sm mt-1 font-extralight'>Anda bisa membayar dengan transfer melalui ATM, Internet Banking & Mobile Banking</p>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>Bank BCA</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>Bank Mandiri</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>Bank BNI</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <p className='mt-4 pt-4 border-slate-200 border-t-2'>Bank BRI</p>
                    </div>
                    <div className='bg-white md:ml-10 border rounded-md mb-5 p-3 -mt-2'>
                        <h5 className='font-semibold'>Uang Elektronik</h5>
                        <p className='text-sm mt-1 font-extralight'>Bayar lebih mudah dan cepat dengan uang elektronik.</p>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>OVO</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>GoPay</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>DANA</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>LinkAja</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>Sakuku</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <p className='mt-4 pt-4 border-slate-200 border-t-2'>QRIS</p>
                    </div>
                    <div className='bg-white md:ml-10 border rounded-md mb-5 p-3 -mt-2'>
                        <h5 className='font-semibold'>Gerai Retail</h5>
                        <p className='text-sm mt-1 font-extralight'>Bayar di gerai retail terdekat dari domisili Anda.</p>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>Alfamart</p>
                            {/* <SlArrowRight/> */}
                        </div>
                        <div className='flex flex-col space-between'>
                            <p className='mt-4 pt-4 border-slate-200 border-t-2'>Indomaret</p>
                            {/* <SlArrowRight/> */}
                        </div>
                    </div>
				</div>
				<div className='md:w-1/3' >
					<TotalFlight />
				</div>
			</div>
			<Footer />
	</div >
  )
}
