import React from 'react';
import { RiRefund2Fill } from 'react-icons/ri';
import { BsArrowRight, BsCalendarDate } from 'react-icons/bs';
import { BiArrowFromLeft, BiArrowToRight } from 'react-icons/bi';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchDetailBooking,
  fetchScheduleById,
  getDetailBooking,
  getScheduleById,
} from '../../features/order/orderSlice';
import { format } from 'date-fns';
import garudaLogo from '../../assets/garuda-logo.png';
import { useState } from 'react';
// import { GrSchedule } from "react-icons/gr";

function TotalFlight() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  //   const [detailooking, setDetailBooking] = useState();

  const scheduleId = searchParams.get('scheduleId');
  const detailBooking = useSelector(getScheduleById);

  const detail = useSelector(getDetailBooking);

  //   const detailBooking = useSelector(getDetailBooking);
  useEffect(() => {
    dispatch(fetchScheduleById(scheduleId));
    dispatch(fetchDetailBooking(id));
  }, [dispatch, id, scheduleId]);

  const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  const date = format(
    new Date(detailBooking?.departureTime || '2022-12-30'),
    'iii, d MMM yy'
  );

  const time = format(
    new Date(detailBooking?.departureTime || '2022-12-30'),
    'hh:mm'
  );

  const amount = rupiah(detail?.amount);
  return (
    <div className="md:w-full border p-2 rounded-md ">
      <span className="font-bold text-base">Penerbangan</span>
      <div className="flex justify-between my-3">
        <p className="flex items-center gap-2 font-semibold text-sm">
          {detailBooking?.originAirportCity} <BsArrowRight />{' '}
          {detailBooking?.destinationAirportCity}
        </p>
        {/* <p className="text-cyan-600 font-semibold">Detail</p> */}
      </div>
      <div className="flex gap-3 flex-wrap text-xs my-3">
        <div className="border w-14 md:p-2 border-solid shadow-sm  flex items-center justify-center">
          <img src={garudaLogo} alt="garudaLogo" />
        </div>
        <div className="flex items-center">
          {detailBooking?.originAirportCode} -{' '}
          {detailBooking?.destinationAirportCode}
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
