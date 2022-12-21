import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { AiFillCheckCircle, AiOutlineUp } from 'react-icons/ai';
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import {
  getArrivePlace,
  getDeparturePlace,
  setArrivePlace,
  setDeparturePlace,
} from '../../features/search/searchSlice';

export default function ComboboxFilterPlane({ selectValues, type }) {
  // const fromValue = `${selectValues[0].city} - ${selectValues[0].iatacode}`;
  const from = useSelector(getDeparturePlace);
  // const toValue = `${selectValues[1].city} - ${selectValues[1].iatacode}`;
  const to = useSelector(getArrivePlace);

  let [selected, setSelected] = useState(type === 'departure' ? from : to);

  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const filteredPeople =
    query === ''
      ? selectValues
      : selectValues.filter((select) => {
          return (
            select.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query?.toLowerCase().replace(/\s+/g, '')) ||
            select.city
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query?.toLowerCase().replace(/\s+/g, '')) ||
            select.country
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query?.toLowerCase().replace(/\s+/g, '')) ||
            select.iatacode
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query?.toLowerCase().replace(/\s+/g, ''))
          );
        });

  return (
    <div className="">
      <Combobox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          type === 'departure'
            ? dispatch(setDeparturePlace(`${e.iatacode}`))
            : dispatch(setArrivePlace(`${e.iatacode}`));
        }}
      >
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md  sm:text-sm flex gap-3 items-center">
            <div className="ml-3">
              {type === 'departure' ? <FaPlaneDeparture /> : <FaPlaneArrival />}
            </div>
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none"
              displayValue={(select) => {
                let displayName;
                if (select.city !== undefined) {
                  displayName = `${select.city} - ${select.iatacode}`;
                } else {
                  if (type === 'departure') {
                    displayName = 'Jakarta - JKT';
                  }
                  if (type !== 'departure') {
                    displayName = 'Jeddah - JED';
                  }
                }
                return displayName;
              }}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <AiOutlineUp
                className="h-2 w-2 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-opacity-5 focus:outline-none sm:text-sm z-10 shadow-md">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((select, i) => (
                  <Combobox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                      }`
                    }
                    value={select}
                  >
                    {({ selected, active }) => (
                      <>
                        <div
                          className={`flex justify-between gap-3 items-center truncate${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          <div>
                            <div className="">
                              <span
                                className={`${
                                  active ? 'text-white' : 'text-thirdly'
                                }`}
                              >
                                {select.city}
                              </span>
                              , {select.country}
                            </div>
                            <span className="text-xs">{select.name}</span>
                          </div>
                          <div className="py-1 px-3 text-md flex items-center rounded-sm bg-gray-400 text-gray-200">
                            {select.iatacode}{' '}
                          </div>
                        </div>
                        {/* <span
                          className={`flex gap-3 items-center truncate${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {select.name}
                        </span> */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-thirdly'
                            }`}
                          >
                            <AiFillCheckCircle
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
