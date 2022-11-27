import React from 'react';
import { AiOutlineArrowRight, AiOutlineSwap } from 'react-icons/ai';
import { FaPlaneDeparture } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

export default function FlightSearch() {
  const navigate = useNavigate();
  const params = new URLSearchParams(document.location.search);
  console.log(params.get('fr'));
  const from = params.get('fr') || 'Jakarta';
  const to = params.get('to') || 'Yogyakarta';
  const passengers = params.get('ps') || 1;
  const departureDate = params.get('dd') || new Date();
  const returnDate = params.get('rd').length > 0 ? params.get('rd') : '';
  const seatClass = params.get('sc') || 'Economy';

  return (
    <div className="w-full mx-auto mt-24">
      <div className="rounded-md shadow-md border-gray-200 border-[1px]  border-solid  p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center text-white w-7 h-7 justify-center bg-primary rounded-full">
            <FaPlaneDeparture />
          </div>
          <div className="flex items-start flex-col justify-center">
            <div className="flex gap-1 font-semibold ">
              <h3>Select Departure Flight</h3>
            </div>
            <div className="flex gap-3 text-gray-400 text-sm">
              <span>{from} </span>
              <div className="flex items-center">
                <AiOutlineArrowRight className="text-sm" />
              </div>

              <span>{to} </span>
              <div className="flex items-center">
                <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
              </div>
              <span>{format(new Date(departureDate), 'iii, i MMM yyyy')}</span>
              <div className="flex items-center">
                <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
              </div>
              <span>{passengers} Guest</span>
              <div className="flex items-center">
                <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
              </div>
              <span>{seatClass}</span>
            </div>
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
