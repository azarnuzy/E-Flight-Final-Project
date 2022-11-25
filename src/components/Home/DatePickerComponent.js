import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths } from 'date-fns';

export default function DatePickerDepart() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      className="outline-none"
    />
  );
}

export function DatePickerReturn({ statusDisable }) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      disabled={!statusDisable}
      className={` bg-transparent outline-none ${
        statusDisable ? 'text-black' : 'text-gray-400'
      }`}
    />
  );
}
