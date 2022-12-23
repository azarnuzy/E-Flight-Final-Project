import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchDetailBooking,
  fetchDetailBooking2,
  fetchScheduleById,
  fetchScheduleById2,
  getDetailBooking,
  getDetailBooking2,
  getScheduleById,
  getScheduleById2,
} from '../../features/order/orderSlice';
import { format } from 'date-fns';
import garudaLogo from '../../assets/garuda-logo.png';

function TotalFlight() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const scheduleId = searchParams.get('scheduleId');
  const scheduleId2 = searchParams.get('scheduleId2');
  const id2 = searchParams.get('booking2');
  const detailBooking = useSelector(getScheduleById);
  const detailBooking2 = useSelector(getScheduleById2);
  const detail = useSelector(getDetailBooking);
  const detail2 = useSelector(getDetailBooking2);

  useEffect(() => {
    dispatch(fetchScheduleById(scheduleId));
    if (scheduleId2 !== 'undefined') {
      dispatch(fetchScheduleById2(scheduleId2));
      dispatch(fetchDetailBooking2(id2));
    }
    dispatch(fetchDetailBooking(id));
  }, [dispatch, id, id2, scheduleId, scheduleId2]);

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
  const date2 = format(
    new Date(detailBooking2?.departureTime || '2022-12-30'),
    'iii, d MMM yy'
  );

  const time2 = format(
    new Date(detailBooking2?.departureTime || '2022-12-30'),
    'hh:mm'
  );
  let total;

  if (scheduleId2 !== 'undefined') {
    const tempTotal = detail?.amount + detail2?.amount;
    total = rupiah(tempTotal);
  } else {
    total = rupiah(detail?.amount);
  }
  return (
    <div className="md:w-full border p-2 rounded-md ">
      <span className="font-bold text-base">Flight</span>
      <div className="flex justify-between my-3">
        <p className="flex items-center gap-2 font-semibold text-sm">
          {detailBooking?.originAirportCity} <BsArrowRight />{' '}
          {detailBooking?.destinationAirportCity}
        </p>
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
      {scheduleId2 !== 'undefined' && (
        <>
          <div className="flex justify-between my-3">
            <p className="flex items-center gap-2 font-semibold text-sm">
              {detailBooking2?.originAirportCity} <BsArrowRight />{' '}
              {detailBooking2?.destinationAirportCity}
            </p>
            {/* <p className="text-cyan-600 font-semibold">Detail</p> */}
          </div>
          <div className="flex gap-3 flex-wrap text-xs my-3">
            <div className="border w-14 md:p-2 border-solid shadow-sm  flex items-center justify-center">
              <img src={garudaLogo} alt="garudaLogo" />
            </div>
            <div className="flex items-center">
              {detailBooking2?.originAirportCode} -{' '}
              {detailBooking2?.destinationAirportCode}
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

      <hr />
      <div className="flex justify-between gap-3 my-2 mb-2">
        <div>
          <h4 className="font-bold">Total Payment</h4>
        </div>
        <div>
          <h4 className="font-semibold text-sky-700">{total}</h4>
        </div>
      </div>
    </div>
  );
}

export default TotalFlight;
