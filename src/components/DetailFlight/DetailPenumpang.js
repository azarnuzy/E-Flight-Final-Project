import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import ListSeat from './ListSeat';
import ListTitleCategory from './ListTitleCategory';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getNamePassenger,
  setNamePassenger,
} from '../../features/order/orderSlice';
function DetailPenumpang() {
  const [searchParams] = useSearchParams();
  const totalPassenger = searchParams.get('totalPassenger');

  const dispatch = useDispatch();

  const names = useSelector(getNamePassenger);

  const temp = () => {
    let tempValue = [];
    for (let i = 0; i < totalPassenger; i++) {
      tempValue.push({
        title: '',
        name: '',
        seatNo: '',
      });
    }
    return tempValue;
  };

  const [passengers] = useState(temp);

  return (
    <>
      <div className="bg-white md:ml-10 h-fit border rounded-md p-3 md:mb-8 mb-6">
        <span className="md:text-lg flex items-center gap-3 my-3">
          {' '}
          <BsPersonCircle /> Passenger details
        </span>
        <div className=" flex justify-between items-center bg-slate-200 px-1 py-2 text-sm rounded-md">
          <p className="font-semibold ">Passenger 1 : Adult</p>
        </div>
        {passengers.map((item, i) => {
          return (
            <div className="" key={i}>
              <div className="flex gap-3 mt-5 mb-5 w-2/3">
                <ListTitleCategory index={i} />
                <ListSeat index={i} />
              </div>
              <div>
                <input
                  id={i}
                  name={`name${i}`}
                  autoComplete="off"
                  className="w-full mt-2 block px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:primary rounded-md sm:text-sm focus:ring-1"
                  placeholder="Full Name"
                  value={names[`name${i}`]}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    dispatch(setNamePassenger({ e, i }));
                    // dispatch(setNamePassenger(e.target.value));
                  }}
                />
                <span className="pl-2 font-sans text-xs font-extralight">
                  Fill in according to KTP / Passport / SIM without punctuation
                  and titles!
                </span>
              </div>
            </div>
          );
        })}

        <div></div>
      </div>
    </>
  );
}

export default DetailPenumpang;
