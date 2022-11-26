import { Switch } from '@headlessui/react';
import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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

export default function FormFlight() {
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="md:w-3/4 w-full mx-auto mb-10 md:shadow-md bg-white md:rounded-md p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between gap-3">
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
      <div className="w-full flex justify-end mt-3">
        <button
          onClick={() => {
            navigate('/pesawat/search');
          }}
          className=" rounded-lg bg-primary text-white py-2 text-sm px-8"
        >
          Cari Penerbangan
        </button>
      </div>
    </div>
  );
}
