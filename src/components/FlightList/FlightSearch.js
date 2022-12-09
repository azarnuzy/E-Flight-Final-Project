import React, { useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaPlaneDeparture } from 'react-icons/fa';

import { format } from 'date-fns';
import ModalChangeSearch from './ModalChangeSearch';
import { useSearchParams } from 'react-router-dom';
import parse from 'date-fns/parse';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../features/order/orderSlice';
import axios from 'axios';
import apiConfig from '../../api/apiConfig';
import { fetchSearchFlight } from '../../features/search/searchSlice';

export default function FlightSearch() {
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const from = searchParams.get('fr');
  const to = searchParams.get('to');
  const passengers = searchParams.get('ps');

  const seatClass = searchParams.get('sc');
  const roundTrip = searchParams.get('rt');

  const order = useSelector(getOrders);
  const departureDate = new Date(
    searchParams.get('dd').replace(' GMT 0700 (Western Indonesia Time)', '')
  );
  const returnDate =
    searchParams.get('rd').length > 0
      ? new Date(
          searchParams
            .get('rd')
            .replace(' GMT 0700 (Western Indonesia Time)', '')
        )
      : new Date();

  useEffect(() => {
    dispatch(fetchSearchFlight({ from, to, departureDate, seatClass }));
  }, [departureDate, dispatch, from, seatClass, to]);
  return (
    <div className="w-full mx-auto lg:mt-24 mt-3">
      <div className="rounded-md shadow-md border-gray-200 border-[1px]  border-solid  p-4 flex items-center justify-between gap-3 md:flex-row flex-col">
        <div className="flex  items-center gap-4 ">
          <div className="flex items-center text-white w-7 h-7 justify-center bg-primary rounded-full ">
            <FaPlaneDeparture />
          </div>
          <div className="flex items-start  flex-col justify-center">
            <div className="flex gap-1 font-semibold ">
              <h3>
                Select {order.tripPosition === 1 ? 'Return' : 'Departure'}{' '}
                Flight
              </h3>
            </div>
            <div className="flex flex-wrap md:gap-3 gap-2 gap-y-[2px] text-gray-400 text-sm ">
              <span>{from} </span>
              <div className="flex items-center">
                <AiOutlineArrowRight className="text-sm" />
              </div>

              <span>{to} </span>
              <div className="flex items-center">
                <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
              </div>
              <span>{format(new Date(departureDate), 'iii, d MMM yyyy')}</span>
              <div className="flex items-center">
                <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
              </div>
              {roundTrip === 'true' && (
                <>
                  {/* {console.log(roundTrip)} */}
                  <span>{format(new Date(returnDate), 'iii, d MMM yyyy')}</span>
                  <div className="flex items-center">
                    <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
                  </div>
                </>
              )}

              <span>{passengers} Guest</span>
              <div className="flex items-center">
                <span className="h-[4px] w-[4px] bg-gray-400 rounded-full"></span>
              </div>
              <span>{seatClass}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end ml-4   ">
          <ModalChangeSearch />
        </div>
      </div>
    </div>
  );
}
