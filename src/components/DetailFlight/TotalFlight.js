import React from 'react';
import { RiRefund2Fill } from 'react-icons/ri';
import { BsArrowRight, BsCalendarDate } from 'react-icons/bs';
import { BiArrowFromLeft, BiArrowToRight } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchScheduleById,
  fetchScheduleById2,
  getScheduleById,
  getScheduleById2,
} from '../../features/order/orderSlice';
import { format } from 'date-fns';
import garudaLogo from '../../assets/garuda-logo.png';
// import { GrSchedule } from "react-icons/gr";

function TotalFlight({ total, total2 }) {
  const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  const [searchParams] = useSearchParams();

  const scheduleId = searchParams.get('scheduleId');
  const scheduleId2 = searchParams.get('scheduleId2');
  const dispatch = useDispatch();
  const scheduleById = useSelector(getScheduleById);
  const scheduleById2 = useSelector(getScheduleById2);

  // console.log(scheduleById);
  const date = format(
    new Date(scheduleById?.departureTime || '2000-12-12'),
    'iii, d MMM yy'
  );

  const time = format(
    new Date(scheduleById?.departureTime || '2000-12-12'),
    'hh:mm'
  );

  const date2 = format(
    new Date(scheduleById2?.departureTime || '2000-12-12'),
    'iii, d MMM yy'
  );

  const time2 = format(
    new Date(scheduleById2?.departureTime || '2000-12-12'),
    'hh:mm'
  );

  useEffect(() => {
    dispatch(fetchScheduleById(scheduleId));
    if (scheduleId2.length > 0) {
      dispatch(fetchScheduleById2(scheduleId2));
    }
  }, [dispatch, scheduleById2.length, scheduleId, scheduleId2]);

  let tempTotal = total + total2;
  const amount = rupiah(tempTotal);
  return (
    <div className="md:w-full border p-2 rounded-md ">
      <span className="font-bold text-base">Penerbangan</span>
      <div className="flex justify-between my-3">
        <p className="flex items-center gap-2 font-semibold text-sm">
          {scheduleById?.originAirportCity} <BsArrowRight />{' '}
          {scheduleById?.destinationAirportCity}
        </p>
        {/* <p className="text-cyan-600 font-semibold">Detail</p> */}
      </div>
      <div className="flex gap-3 flex-wrap text-xs my-3">
        <div className="border w-14 md:p-2 border-solid shadow-sm  flex items-center justify-center">
          <img src={garudaLogo} alt="garudaLogo" />
        </div>
        <div className="flex items-center">
          {scheduleById?.originAirportCode} -{' '}
          {scheduleById?.destinationAirportCode}
        </div>
        <div className="flex items-center">
          <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
        </div>
        <div className="flex items-center">{date}</div>
        <div className="flex items-center">
          <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
        </div>
        <div className="flex items-center">{time}</div>
      </div>
      {scheduleId2.length > 0 && (
        <>
          <div className="flex justify-between my-3">
            <p className="flex items-center gap-2 font-semibold text-sm">
              {scheduleById2?.originAirportCity} <BsArrowRight />{' '}
              {scheduleById2?.destinationAirportCity}
            </p>
            {/* <p className="text-cyan-600 font-semibold">Detail</p> */}
          </div>
          <div className="flex gap-3 flex-wrap text-xs my-3">
            <div className="border w-14 md:p-2 border-solid shadow-sm  flex items-center justify-center">
              <img src={garudaLogo} alt="garudaLogo" />
            </div>
            <div className="flex items-center">
              {scheduleById2?.originAirportCode} -{' '}
              {scheduleById2?.destinationAirportCode}
            </div>
            <div className="flex items-center">
              <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
            </div>
            <div className="flex items-center">{date2}</div>
            <div className="flex items-center">
              <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
            </div>
            <div className="flex items-center">{time2}</div>
          </div>
        </>
      )}

      {/* <div className="mt-2 mb-2">
        <h1 className="font-semibold">Kebijakan Tiket</h1>
        <div className="flex items-center gap-3 my-3">
          <RiRefund2Fill className="text-green-500" />
          <span className="text-sm text-green-500">Bisa refund</span>
        </div>
        <div className="flex items-center gap-3 my-3">
          <BsCalendarDate className="text-green-500" />
          <span className="text-sm text-green-500">Bisa reschedule</span>
        </div>
      </div>
      <div className="border rounded-md text-sm px-1 py-2 mb-3 mt-2 shadow">
        <p>Kamu mendapatkan diskon IDR 4.000 untuk pemesanan ini</p>
      </div> */}
      <hr />
      <div className="flex justify-between gap-3 my-2 mb-2">
        <div>
          <h4 className="font-bold">Total Pembayaran</h4>
        </div>
        <div>
          <h4 className="font-semibold text-sky-700">{amount}</h4>
        </div>
      </div>
    </div>
  );
}

export default TotalFlight;
