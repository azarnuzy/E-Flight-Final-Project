import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiPlaneLine } from 'react-icons/ri';
import { HiArrowRight } from 'react-icons/hi';
import { VscDebugStackframeDot } from 'react-icons/vsc';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { getHistory } from '../../features/order/orderHistorySlice';
export default function OrderHistory() {
  const dispatch = useDispatch();
  const { history, isLoading, hasError } = useSelector(
    (state) => state?.orderHistory || []
  );

  const user = JSON.parse(localStorage.getItem('user-info'));

  useEffect(() => {
    dispatch(getHistory(user.userId));
  }, [dispatch, user.userId]);

  return (
    <>
      <div className="bg-white md:ml-10 md:w-3/4 h-full mb-10 ">
        <div className=" p-3 drop-shadow-md bg-white rounded-md mb-4">
          <h1 className="text-lg font-semibold">Order History</h1>
          <p className=" text-sm mt-3">Displays recent order history.</p>
        </div>
        {history &&
          history.map((res, index) => {
            return (
              <div className="bg-slate-200 p-3 mt-4 rounded-md flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <RiPlaneLine className="text-primary" />
                    <span className="text-base">Pesawat</span>
                  </div>
                  <div>
                    <button>
                      <BiDotsVerticalRounded />
                    </button>
                  </div>
                </div>
                <p className="text-sm">Order ID : {res.bookingId}</p>
                <div className="flex items-center gap-3 font-semibold">
                  <h1 className="">{res.originAirport}</h1> <HiArrowRight />{' '}
                  <h1>{res.destinationAirport}</h1>
                </div>
                <div className="flex flex-wrap gap-5 gap-y-1 ">
                  <div className="flex items-center">
                    <p>Sekali Jalan</p>
                    <VscDebugStackframeDot /> <p>{res.totalPassenger} dewasa</p>
                  </div>
                  <span className="hidden md:inline-block">|</span>
                  <div className="flex items-center">
                    <p>{res.departureTime}</p>
                  </div>
                  <span className="hidden md:inline-block">|</span>
                  <div className="flex items-center">
                    <p>{res.arrivalTime}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-5">
                  <span className=" text-slate-400 px-3 p-1 rounded-lg text-sm">
                    {res.bookingStatus}
                  </span>
                  <Link className="text-secondary font-medium hover:text-primary">
                    {' '}
                    See Detail{' '}
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
