import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyOrders } from '../../features/order/orderSlice';
import {
  getAirports,
  getArrivePlace,
  getDepartureDate,
  getDeparturePlace,
  getPassenger,
  getReturnDate,
  getRoundTrip,
  getSeatClass,
  setRoundTrip,
} from '../../features/search/searchSlice';
import ComboboxFilterPlane from '../Home/ComboboxFilterPlace';
import DatePickerDepart, {
  DatePickerReturn,
} from '../Home/DatePickerComponent';
import InputPassengers from '../Home/InputPassengers';
import ListBoxCategory from '../Home/ListBoxCategory';

export default function ChangeSearchForm({ closeModal }) {
  const [enabled, setEnabled] = useState(true);
  const departurePlace = useSelector(getDeparturePlace);
  const arrivePlace = useSelector(getArrivePlace);
  const passenger = useSelector(getPassenger);
  const departureDate = useSelector(getDepartureDate);
  const returnDate = useSelector(getReturnDate);
  const seatClass = useSelector(getSeatClass);
  const airports = useSelector(getAirports);
  const roundTrip = useSelector(getRoundTrip);
  const dispatch = useDispatch();

  return (
    <div className="p-4 w-full mx-auto md:shadow-md bg-white md:rounded-md ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between gap-3">
        <div>
          <span className="text-sm font-semibold ml-3">From</span>
          <ComboboxFilterPlane selectValues={airports} type="departure" />
        </div>
        <div>
          <span className="text-sm font-semibold ml-3">To</span>
          <ComboboxFilterPlane selectValues={airports} type="arrival" />
        </div>
        <div>
          <span className="text-sm font-semibold ml-3">No. of Passengers</span>
          <InputPassengers />
        </div>
        <div>
          <span className="text-sm font-semibold ml-3">Departure Date</span>
          <div className="relative w-full cursor-default rounded-lg py-2 bg-white text-left shadow-md  sm:text-sm flex gap-6 items-center">
            <FaCalendarAlt className="ml-3" />
            <DatePickerDepart />
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold ml-3 flex gap-3 items-center">
            <input
              type="checkbox"
              value={enabled}
              onChange={() => {
                dispatch(setRoundTrip(enabled));
                setEnabled(!enabled);
              }}
              className="w-4 h-4 text-white bg-primary rounded border-primary"
            />
            Return Date
          </span>
          <div className="relative w-full cursor-default rounded-lg py-2 bg-white text-left shadow-md  sm:text-sm flex gap-6 items-center mt-1">
            <FaCalendarAlt
              className={`ml-3 ${enabled === true ? 'text-gray-500' : ''}`}
            />
            <DatePickerReturn statusDisable={enabled} />
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold ml-3">Seat Class</span>
          <ListBoxCategory />
        </div>
      </div>
      <div className="w-full flex justify-end mt-3">
        <Link
          to={`/flight/search?fr=${departurePlace}&to=${arrivePlace}&ps=${passenger}&date=${departureDate}&dd=${departureDate}&rd=${returnDate}&sc=${seatClass}&rt=${roundTrip}`}
          className=" rounded-lg bg-primary text-white py-2 text-sm px-8"
          onClick={() => {
            closeModal();
            dispatch(emptyOrders());
          }}
        >
          Search Flight
        </Link>
      </div>
    </div>
  );
}
