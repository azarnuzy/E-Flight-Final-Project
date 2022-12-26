import React from 'react'
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
import { useWindowWidth } from '@react-hook/window-size';
import '../../index.css'

export default function CityDestination (){

    const width = useWindowWidth();

    const getSlidesPerView = () => {
        if (width >= 768) {
          return 3;
        } else {
          return 1;
        }
      };
    return(
        <div className='md:p-10 p-5'>
            <h3 className='font-bold text-3xl text-center'>Popular Cities in Indonesia</h3>
            <div className='lg:p-10 mt-3'>
                <Swiper
                    slidesPerView={getSlidesPerView()}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='cursor-pointer'>
                        <img src={city1} alt='' className='brightness-50 z-1 w-full'></img>
                        <div className='text-city w-full'>
                            <p className='md:text-2xl text-xl font-semibold text-center'>Yogyakarta</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city2} alt='' className='brightness-50 z-1 w-full'></img>
                        <div className='text-city w-full'>
                            <p className='md:text-2xl text-xl font-semibold text-center'>Bali</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <img src={city3} alt='' className='brightness-50 z-1 w-full'></img>
                        <div className='text-city w-full'>
                            <p className='md:text-2xl text-xl font-semibold text-center'>Jakarta</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city4} alt='' className='brightness-50 z-1 w-full'></img>
                        <div className='text-city w-full'>
                            <p className='md:text-2xl text-xl font-semibold text-center'>Surabaya</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city5} alt='' className='brightness-50 z-1 w-full'></img>
                        <div className='text-city w-full'>
                            <p className='md:text-2xl text-xl font-semibold text-center'>Malang</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city6} alt='' className='brightness-50 z-1 w-full'></img>
                        <div className='text-city w-full'>
                            <p className='md:text-2xl text-xl font-semibold text-center'>Surakarta</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city7} alt='' className='brightness-50 z-1 w-full'></img>
                        <div className='text-city w-full'>
                            <p className='md:text-2xl text-xl font-semibold text-center'>Bandung</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city8} alt='' className='brightness-50 z-1 w-full'></img>
                        <div className='text-city w-full'>
                            <p className='md:text-2xl text-xl font-semibold text-center'>Padang</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={city9} alt='' className='brightness-50 z-1 w-full'></img>
                        <div className='text-city w-full'>
                            <p className='md:text-2xl font-semibold text-center'>Papua</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}