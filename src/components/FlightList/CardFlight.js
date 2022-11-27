import React from 'react';
import { FaPlane, FaSuitcaseRolling } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import garudaLogo from '../../assets/garuda-logo.png';
import { setOrders } from '../../features/order/orderSlice';

export default function CardFlight({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="shadow-md border-gray-100 p-3 border-solid border-[1px] mt-2">
      <span className="text-xs text-gray-900">{item.airplane}</span>
      <div className="flex justify-between">
        <div className="border w-14 p-2 border-solid shadow-sm  flex items-center justify-center mr-3 ml-5">
          <img src={garudaLogo} alt="" />
        </div>
        <div className="flex gap-5 ml-5">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">{item.departure_time}</span>
            <span className="text-md">{item.from_airport}</span>
          </div>
          <div className="flex justify-center flex-col items-center">
            <span className="text-gray-500 text-xs">{item.duration}</span>
            <span className="w-full h-[1px] bg-gray-600"></span>
            <span className="text-gray-500 text-xs">{item.distance}</span>
          </div>
          <div className="flex items-center -ml-2">
            <FaPlane className="text-gray-500 text-xs " />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-semibold">{item.arrival_time}</span>
            <span className="text-md">{item.to_airport}</span>
          </div>
        </div>
        <div className="flex items-center">
          <FaSuitcaseRolling />
        </div>
        <div className="w-1/5 flex flex-col justify-center">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-primary">
              {item.price}
            </span>
            <span className="text-gray-600 font-medium">/pax</span>
          </div>
          <button
            className="py-1 px-8 text-white bg-primary rounded-md"
            onClick={() => {
              dispatch(setOrders(item));
            }}
          >
            Choose
          </button>
        </div>
      </div>
    </div>
  );
}
