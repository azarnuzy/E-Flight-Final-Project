import React, { useState, Fragment } from 'react'
import city1 from '../../assets/yogyakarta.jpg'
import city2 from '../../assets/bali.jpg'
import city3 from '../../assets/jakarta.jpg'
import city4 from '../../assets/surabaya.jpg'
import city5 from '../../assets/malang.jpg'
import city6 from '../../assets/solo.jpg'
import city7 from '../../assets/bandung.jpg'
import city8 from '../../assets/padang.jpg'
import city9 from '../../assets/raja-ampat.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper"
import { Dialog, Transition } from '@headlessui/react'
import '../../index.css'

export default function CityDestination (){
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return(
        <div className='p-10'>
            <h3 className='font-bold text-3xl text-center'>Destination City in Indonesia</h3>
            <div className='p-10'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide onClick={openModal}>
                        <img src={city1} alt='' className='brightness-50 z-1'></img>
                        <div className='text-city'>
                            <p className='md:text-3xl font-semibold'>Yogyakarta</p>
                        </div>
                    </SwiperSlide>
                    {/* <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Payment successful
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                    Your payment has been successfully submitted. We've sent
                                    you an email with all of the details of your order.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={closeModal}
                                    >
                                    Got it, thanks!
                                    </button>
                                </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                        </Dialog>
                    </Transition> */}
                    <SwiperSlide>
                        <img src={city2} alt='' className='brightness-50 z-1'></img>
                        <div className='text-city'>
                            <p className='md:text-3xl font-semibold'>Bali</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city3} alt='' className='brightness-50 z-1'></img>
                        <div className='text-city'>
                            <p className='md:text-3xl font-semibold'>Jakarta</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city4} alt='' className='brightness-50 z-1'></img>
                        <div className='text-city'>
                            <p className='md:text-3xl font-semibold'>Surabaya</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city5} alt='' className='brightness-50 z-1'></img>
                        <div className='text-city'>
                            <p className='md:text-3xl font-semibold'>Malang</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city6} alt='' className='brightness-50 z-1'></img>
                        <div className='text-city'>
                            <p className='md:text-3xl font-semibold'>Surakarta</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city7} alt='' className='brightness-50 z-1'></img>
                        <div className='text-city'>
                            <p className='md:text-3xl font-semibold'>Bandung</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city8} alt='' className='brightness-50 z-1'></img>
                        <div className='text-city'>
                            <p className='md:text-3xl font-semibold'>Padang</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city9} alt='' className='brightness-50 z-1'></img>
                        <div className='text-city'>
                            <p className='md:text-3xl font-semibold'>Papua</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}