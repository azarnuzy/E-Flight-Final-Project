import { format } from 'date-fns';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {
  getArrivePlace,
  getDepartureDate,
  getDeparturePlace,
} from '../../features/search/searchSlice';

export default function UserFlight() {
  const from = useSelector(getDeparturePlace);
  const to = useSelector(getArrivePlace);
  const departureDate = useSelector(getDepartureDate);

  return (
    <div className=" w-1/4  mt-24 h-fit shadow-md border-gray-100 border-solid border-[1px] pt-3">
      <div className="ml-30">
        <h2 className="text-lg font-bold pl-3 mb-2">Your Flight</h2>
        <div className="w-full shadow flex">
          <div className="mr-4 h-14 w-1 bg-primary"></div>
          <div className="w-full">
            <span className="text-sm">
              {format(new Date(departureDate), 'iii, d MMM yyyy')}
            </span>
            <span className="flex items-center font-bold gap-1">
              {from} <AiOutlineArrowRight className="text-sm" /> {to}
            </span>
          </div>
        </div>
        {/* <div className="w-full shadow-sm flex text-gray-400"> */}
        {/* <div className="mr-4 h-14 w-1 bg-primary"></div> */}
        {/* <div className="ml-4">
            <span className="text-sm">Sun, 27 Nov 2022</span>
            <span className="flex items-center font-bold gap-1">
              Yogyakarta <AiOutlineArrowRight className="text-sm" /> Jakarta
            </span>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
