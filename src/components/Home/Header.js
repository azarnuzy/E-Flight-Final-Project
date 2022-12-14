import React from 'react';
import background from '../../assets/home-swiper-1.webp';

export default function Header() {
  return (
    <div className="w-full">
      <div className="bg-black opacity-30 h-[70vh] absolute w-full top-14 -z-[8]"></div>
      <img
        className="absolute w-[110%] h-[70vh] object-center object-cover -z-[9] top-14"
        src={background}
        loading="lazy"
        alt=""
      />
      <div className="h-[60vh] w-full flex justify-center items-center text-center text-white font-semibold text-2xl flex-col relative top-12">
        Traveling Made Easy with
        <span className="text-3xl font-bold block">FlyKet</span>
      </div>
    </div>
  );
}
