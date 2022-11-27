import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaPlaneDeparture } from 'react-icons/fa';

import { format } from 'date-fns';
import ModalChangeSearch from './ModalChangeSearch';
import { useSelector } from 'react-redux';
import {
  getArrivePlace,
  getDepartureDate,
  getDeparturePlace,
  getPassenger,
  getSeatClass,
} from '../../features/search/searchSlice';

export default function FlightSearch() {
  const params = new URLSearchParams(document.location.search);

  const from = useSelector(getDeparturePlace) || params.get('fr') || 'Jakarta';
  const to = useSelector(getArrivePlace) || params.get('to') || 'Yogyakarta';
  const passengers = useSelector(getPassenger) || params.get('ps') || 1;
  const departureDate =
    useSelector(getDepartureDate) || params.get('dd') || new Date();
  // const returnDate = useSelector(getReturnDate) || params.get('rd').length > 0 ? params.get('rd') : '';
  const seatClass = useSelector(getSeatClass) || params.get('sc') || 'Economy';

  return (
    <div className="w-full mx-auto lg:mt-24 mt-3">
      <div className="rounded-md shadow-md border-gray-200 border-[1px]  border-solid  p-4 flex items-center justify-between gap-3 md:flex-row flex-col">
        <div className="flex  items-center gap-4 ">
          <div className="flex items-center text-white w-7 h-7 justify-center bg-primary rounded-full ">
            <FaPlaneDeparture />
          </div>
          <div className="flex items-start  flex-col justify-center">
            <div className="flex gap-1 font-semibold ">
              <h3>Select Departure Flight</h3>
            </div>
            <div className="flex flex-wrap md:gap-3 gap-2 gap-y-[2px] text-gray-400 text-sm ">
              <span>{from} </span>
              <div className="flex items-center">
                <AiOutlineArrowRight className="text-sm" />
              </div>

              <span>{to} </span>
              <div className="flex items-center">
                <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
              </div>
              <span>{format(new Date(departureDate), 'iii, d MMM yyyy')}</span>
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
          <ModalChangeSearch />
        </div>
      </div>
    </div>
  );
}
