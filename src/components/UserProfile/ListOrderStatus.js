import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { HiChevronUpDown } from 'react-icons/hi2';
import { getHistory } from '../../features/order/orderHistorySlice';
import { useDispatch } from 'react-redux';
const status = [
  { name: 'All Status' },
  { name: 'Completed' },
  { name: 'Waiting' },
  { name: 'Active' },
];

export default function ListOrderStatus() {
  const [selected, setSelected] = useState({ name: 'Order By Status' });
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user-info'));
  return (
    <div className="w-full">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          dispatch(getHistory({ id: user?.userId, orderByStatus: e.name }));
        }}
      >
        <div className="relative md:mr-5 ">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-2 md:pr-10 text-left shadow focus:outline-none sm:text-sm">
            <span className="flex gap-3 truncate items-center">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-primary ring-opacity-5  focus:outline-none sm:text-sm">
              {status.map((status, statusIdx) => (
                <Listbox.Option
                  key={statusIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-thirdly text-white' : 'text-gray-900'
                    }`
                  }
                  value={status}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {status.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <AiFillCheckCircle
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
