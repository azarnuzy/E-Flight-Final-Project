import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiPlaneLine } from 'react-icons/ri';
import { HiArrowRight } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import {
  getHistory,
  getHistoryOrder,
  getInvoice,
  getIsLoading,
  getOrderByStatus,
} from '../../features/order/orderHistorySlice';
import ListOrderStatus from './ListOrderStatus';
import { useState } from 'react';
export default function OrderHistory() {
  const dispatch = useDispatch();
  let tempHistory = useSelector(getHistoryOrder);
  let isLoading = useSelector(getIsLoading);
  const [history, setHistory] = useState(tempHistory);
  const status = useSelector(getOrderByStatus);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user-info'));

  useEffect(() => {
    if (isLoading === 'idle') {
      dispatch(getHistory({ id: user.userId, orderByStatus: '' }));
    }

    if (tempHistory !== null) {
      setHistory(tempHistory);
    }
  }, [dispatch, isLoading, status, tempHistory, user.userId]);

  const handleInvoice = async ({ userId, bookingId }) => {
    const response = await dispatch(getInvoice({ userId, bookingId }));
    return response.payload;
  };

  return (
    <>
      <div className="bg-white md:ml-10 md:w-3/4 h-full mb-10 ">
        <div className="flex flex-col justify-start sm:flex-row sm:justify-between p-3 drop-shadow-md bg-white rounded-md mb-4">
          <div>
            <h1 className="text-lg font-semibold">Order History</h1>
            <p className=" text-sm mt-3">Displays recent order history.</p>
          </div>
          <div className="w-full sm:my-0 my-4 sm:w-1/4 flex items-center">
            <ListOrderStatus />
          </div>
        </div>
        {history &&
          history.map((res, index) => {
            const status = () => {
              if (res.bookingStatus === 'ACTIVE') {
                return (
                  <Link
                    key={index}
                    to={`/payment/${res.bookingId}?scheduleId=${res.flightId}&scheduleId2=undefined`}
                    className="text-secondary font-medium hover:text-primary"
                  >
                    Proceed to Payment
                  </Link>
                );
              }
              if (res.bookingStatus === 'COMPLETED') {
                return (
                  <button
                    onClick={() => {
                      handleInvoice({
                        userId: user.userId,
                        bookingId: res.bookingId,
                      });
                    }}
                    className={`text-secondary font-medium hover:text-primary`}
                  >
                    Download Invoice
                  </button>
                );
              }

              return '';
            };

            return (
              <div
                className={`bg-slate-200 p-3 mt-4 rounded-md flex flex-col gap-3 ${
                  res.bookingStatus === 'COMPLETED'
                    ? 'cursor-pointer hover:opacity-80'
                    : 'cursor-default'
                }`}
                onClick={() => {
                  navigate(
                    `/myorder/${res.bookingId}?scheduleId=${res.flightId}&purchaseAt=${res.purchaseCompleteAt}`
                  );
                }}
                key={index}
              >
                <div className="flex justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <RiPlaneLine className="text-primary" />
                    <span className="text-base">Plane</span>
                  </div>
                  {res.bookingStatus === 'COMPLETED' && (
                    <div className="text-primary">Detail Ticket</div>
                  )}
                </div>
                <p className="text-sm">Order ID : {res.bookingId}</p>
                <div className="flex items-center gap-3 font-semibold">
                  <h1 className="">{res.originAirport}</h1> <HiArrowRight />{' '}
                  <h1>{res.destinationAirport}</h1>
                </div>
                <div className="flex flex-wrap gap-5 gap-y-1 ">
                  <div className="flex items-center">
                    <p>{res.totalPassenger} adult</p>
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
                    {status()}
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
