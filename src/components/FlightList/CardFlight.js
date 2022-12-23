import React from 'react';
import { FaPlane, FaSuitcaseRolling } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import garudaLogo from '../../assets/garuda-logo.png';
import {
  getOrders,
  setOrders,
  setTripPosition,
} from '../../features/order/orderSlice';

export default function CardFlight({ item }) {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  const order = useSelector(getOrders);
  const navigate = useNavigate();

  const roundTrip = searchParams.get('rt');
  // const departureTime =
  // console.log(item.departureTime);

  const departureTime = item.departureTime
    .replace('T', ' ')
    .split(' ')[1]
    .split(':')
    .slice(0, -1)
    .join(':');
  const arrivalTime = item.arrivalTime
    .replace('T', ' ')
    .split(' ')[1]
    .split(':')
    .slice(0, -1)
    .join(':');
  const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };
  const from = searchParams.get('fr');
  const to = searchParams.get('to');
  const passengers = searchParams.get('ps');
  const seatClass = searchParams.get('sc');
  const departureDate = new Date(
    searchParams.get('dd').replace(' GMT 0700 (Western Indonesia Time)', '')
  );
  const returnDate =
    searchParams.get('rd').length > 0
      ? new Date(
          searchParams
            .get('rd')
            .replace(' GMT 0700 (Western Indonesia Time)', '')
        )
      : new Date();
  return (
    <div className="shadow-md border-gray-100 p-3 border-solid border-[1px] mt-2">
      <div className="flex justify-between md:flex-row gap-y-2 flex-col items-center">
        <div className="flex flex-col items-center min-w-fit lg:w-1/4 gap-y-3">
          <span className="text-xs text-gray-900">Garuda Indonesia</span>
          <div className="border w-14 md:p-2 border-solid shadow-sm  flex items-center justify-center mx-3">
            <img src={garudaLogo} alt="" />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center flex-col items-center md:flex-row gap-4">
          <div className="flex gap-5 ml-5">
            <div className="flex flex-col justify-between">
              <span className="text-xl font-semibold">{departureTime}</span>
              <span className="text-md">{item.originAirportCode}</span>
            </div>
            <div className="flex justify-center flex-col items-center">
              <span className="text-gray-500 text-xs">
                {item.hours}h {item.minutes}m
              </span>
              <span className="w-full h-[1px] bg-gray-600"></span>
              <span className="text-gray-500 text-xs">Direct</span>
            </div>
            <div className="flex items-center -ml-2">
              <FaPlane className="text-gray-500 text-xs " />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-semibold">{arrivalTime}</span>
              <span className="text-md">{item.destinationAirportCode}</span>
            </div>
          </div>
          <div className="flex items-center">
            <FaSuitcaseRolling />
          </div>
        </div>
        <div className="md:w-1/5 flex flex-col justify-center">
          <div className="flex items-center">
            <span className="text-md font-semibold text-primary">
              {rupiah(item.price)}
            </span>
            <span className="text-gray-600 font-medium">/pax</span>
          </div>
          <button
            className="py-1 md:px-8 text-white bg-primary rounded-md"
            onClick={() => {
              dispatch(
                setOrders({ item: item, tripPosition: order.tripPosition })
              );
              if (roundTrip === 'true') {
                navigate(
                  `/flight/search?fr=${to}&to=${from}&ps=${passengers}&dd=${returnDate}&rd=${returnDate}&sc=${seatClass}&rt=${roundTrip}`
                );
                dispatch(setTripPosition(1));
              }
              window.scrollTo(0, 0);
            }}
          >
            Choose
          </button>
        </div>
      </div>
    </div>
  );
}
