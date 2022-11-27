import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths } from 'date-fns';
import {
  getDepartureDate,
  getReturnDate,
  setDepartureDate,
  setReturnDate,
} from '../../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function DatePickerDepart() {
  const departureDate = useSelector(getDepartureDate);
  const dispatch = useDispatch();
  return (
    <DatePicker
      selected={departureDate}
      onChange={(date) => {
        dispatch(setDepartureDate(date));
      }}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      className="outline-none"
    />
  );
}

export function DatePickerReturn({ statusDisable }) {
  const returnDate = useSelector(getReturnDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!statusDisable) {
      dispatch(setReturnDate(''));
    } else {
      dispatch(setReturnDate(new Date()));
    }
  }, [dispatch, statusDisable]);
  return (
    <DatePicker
      selected={returnDate}
      onChange={(date) => dispatch(setReturnDate(date))}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      disabled={!statusDisable}
      className={` bg-transparent outline-none ${
        statusDisable ? 'text-black' : 'text-gray-400'
      }`}
    />
  );
}
