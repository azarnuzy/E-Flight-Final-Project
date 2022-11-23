import React from 'react';
import background from '../../assets/home-swiper-1.png';

export default function Header() {
  return (
    <div className="w-full mt-12">
      <div className="bg-black opacity-30 h-[40vh] absolute w-full top-14 -z-[8]"></div>
      <img
        className="absolute w-[110%] h-[40vh] object-center object-cover -z-[9] top-14"
        src={background}
        alt=""
      />
      <div className="h-[40vh] w-full flex justify-center items-center text-center text-white font-semibold text-2xl">
        Traveling Made Easy with <br />
        FlyKet
      </div>
    </div>
  );
}
