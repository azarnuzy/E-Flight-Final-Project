import { Switch } from '@headlessui/react';
import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import ComboboxFilterPlane from './ComboboxFilterPlace';
import DatePickerDepart, { DatePickerReturn } from './DatePickerComponent';
import InputPassengers from './InputPassengers';
import ListBoxCategory from './ListBoxCategory';

const places = [
  { id: 1, name: 'Jakarta' },
  { id: 2, name: 'Bandung' },
  { id: 3, name: 'Aceh' },
  { id: 4, name: 'Makasar' },
  { id: 5, name: 'Solo' },
  { id: 6, name: 'Yogyakarta' },
];

const flightClass = [
  { id: 1, name: 'Economy' },
  { id: 2, name: 'Premium Economy' },
  { id: 3, name: 'Business' },
  { id: 4, name: 'First Class' },
];

export default function FormFlight() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="w-3/4 mx-auto mb-10 shadow-md bg-white rounded-md p-5">
      <div className="grid grid-cols-3  justify-between gap-3">
        <div>
          <span className="text-sm font-semibold ml-3">Dari</span>
          <ComboboxFilterPlane selectValues={places} type="departure" />
        </div>
        <div>
          <span className="text-sm font-semibold ml-3">Ke</span>
          <ComboboxFilterPlane selectValues={places} type="arrival" />
        </div>
        <div>
          <span className="text-sm font-semibold ml-3">Jumlah Penumpang</span>
          <InputPassengers />
        </div>
        <div>
          <span className="text-sm font-semibold ml-3">Tanggal Pergi</span>
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
              onChange={() => setEnabled(!enabled)}
              class="w-4 h-4 text-white bg-primary rounded border-primary"
            />
            Tanggal Pulang
          </span>
          <div className="relative w-full cursor-default rounded-lg py-2 bg-white text-left shadow-md  sm:text-sm flex gap-6 items-center mt-1">
            <FaCalendarAlt className="ml-3" />
            <DatePickerReturn statusDisable={enabled} />
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold ml-3">Kelas Penerbangan</span>
          <ListBoxCategory />
        </div>
      </div>
    </div>
  );
}
