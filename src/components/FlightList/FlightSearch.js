import React from 'react';
import { AiOutlineSwap } from 'react-icons/ai';
import { FaPlaneDeparture } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function FlightSearch() {
  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto mt-24">
      <div className="rounded-md shadow-md border-gray-200 border-[1px]  border-solid  p-4 flex items-center justify-center gap-3">
        <div className="flex items-center text-white w-7 h-7 justify-center bg-primary rounded-full">
          <FaPlaneDeparture />
        </div>
        <div className="flex items-start flex-col justify-center">
          <span>Pilih Penerbangan Pergi</span>
          <div className="flex gap-3 text-gray-400 text-sm">
            <div className="flex gap-1">
              <span>Jakarta (JKTC)</span>
              <div className="flex items-center">
                <AiOutlineSwap />
              </div>

              <span>Yogyakarta (JKTC)</span>
            </div>
            <div className="flex items-center">
              <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
            </div>
            <span>Rab, 30 Nov 2022</span>
            <div className="flex items-center">
              <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
            </div>
            <span>1 Penumpang</span>
            <div className="flex items-center">
              <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
            </div>
            <span>Ekonomi</span>
          </div>
        </div>
        <div className="flex justify-end ml-4   ">
          <button
            onClick={() => {
              navigate('/pesawat/search');
            }}
            className=" rounded-lg bg-primary text-white py-2 text-sm px-6"
          >
            Ubah Pencarian
          </button>
        </div>
      </div>
    </div>
  );
}
