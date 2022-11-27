import { format } from 'date-fns';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrders } from '../../features/order/orderSlice';
import {
  getArrivePlace,
  getDepartureDate,
  getDeparturePlace,
} from '../../features/search/searchSlice';
import garudaLogo from '../../assets/garuda-logo.png';
import { FaPlane } from 'react-icons/fa';

export default function UserFlight() {
  const from = useSelector(getDeparturePlace);
  const to = useSelector(getArrivePlace);
  const departureDate = useSelector(getDepartureDate);
  const order = useSelector(getOrders);

  return (
    <div className=" w-1/3  mt-24 h-fit shadow-md border-gray-100 border-solid border-[1px] pt-3">
      <div className="ml-30">
        <h2 className="text-lg font-bold pl-3 mb-2">Your Flight</h2>
        <div className="flex shadow">
          <div className="mr-4 min-h-full w-1 bg-primary"></div>
          <div>
            <div className="w-full flex">
              <div className="w-full">
                <span className="text-sm">
                  {format(new Date(departureDate), 'iii, d MMM yyyy')}
                </span>
                <span className="flex items-center font-bold gap-1">
                  {from} <AiOutlineArrowRight className="text-sm" /> {to}
                </span>
              </div>
            </div>
            {order.airplane.length > 0 && (
              <div className="flex flex-col items-start py-3">
                <div className="flex gap-1">
                  <div className=" rounded-full flex items-center justify-center w-14 my-2 mr-2">
                    <img src={garudaLogo} alt="" />
                  </div>
                  <span className="w-full text-sm font-semibold flex items-center">
                    {order.airplane}
                  </span>
                </div>
                <div className="flex gap-5 justify-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                      {order.departure_time}
                    </span>
                    <span className="text-xs">{order.from_airport}</span>
                  </div>
                  <div className="flex justify-center flex-col items-center">
                    <span className="text-gray-500 text-xs">
                      {order.duration}
                    </span>
                    <span className="w-full h-[1px] bg-gray-600"></span>
                    <span className="text-gray-500 text-xs">
                      {order.distance}
                    </span>
                  </div>
                  <div className="flex items-center -ml-2">
                    <FaPlane className="text-gray-500 text-xs " />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                      {order.arrival_time}
                    </span>
                    <span className="text-xs">{order.to_airport}</span>
                  </div>
                </div>
              </div>
            )}
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
        <div className="w-full flex justify-end  mt-3">
          <Link
            to={'/myorder'}
            className="py-1 px-4 bg-primary m-2 rounded-md text-white font-semibold"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}
