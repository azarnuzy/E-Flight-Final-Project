import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import {
  getDetail,
  getDetailHistory,
  getSchedule,
  getScheduleById,
  getStatusDetail,
} from '../features/order/orderHistorySlice';
import garudaLogo from '../assets/garuda-logo.png';
import logoFull from '../assets/logo-full.png';
import { format } from 'date-fns';

function DetailHistory() {
  const { bookingId } = useParams();
  const [searchParams] = useSearchParams();
  const detailHistory = useSelector(getDetail);
  const schedule = useSelector(getSchedule);
  const statusDetail = useSelector(getStatusDetail);
  const dispatch = useDispatch();
  const scheduleId = searchParams.get('scheduleId');
  const purchaseAt = searchParams.get('purchaseAt');

  window.scrollTo(0, 0);

  const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  useEffect(() => {
    if (statusDetail === 'idle') {
      dispatch(getDetailHistory(bookingId));
      dispatch(getScheduleById(scheduleId));
    }
  }, [bookingId, dispatch, scheduleId, statusDetail]);

  console.log(detailHistory);

  return (
    <div>
      <Navbar />
      <div className="md:max-w-[1024px] mx-auto mt-10 p-7 mb-20 flex flex-col justify-start">
        <h1 className="gap-3 text-xl font-medium mb-3 ml-3 mt-10 text-center">
          Ticket E-Flight
        </h1>
        <div className="sm:flex sm:justify-between mb-6">
          <div className="md:w-1/2 ">
            <span className="text-base font-bold">Order Detail</span>
            <div className="font-medium">
              Booking ID {detailHistory.orderDetail.bookingId}
            </div>
            <div className="font-medium">
              Payment Methode {detailHistory.orderDetail.paymentName}
            </div>
            <div className="font-medium">
              Total Payment {rupiah(detailHistory.orderDetail.totalPayment)}
            </div>
          </div>
          <div className="pr-2 sm:text-end">
            <span className="text-base font-bold">Buyer Detail</span>
            <div className="font-medium">
              {' '}
              {detailHistory.orderDetail.cstName}
            </div>
            <div className="font-medium">
              {' '}
              {detailHistory.orderDetail.cstEmail}
            </div>
            <div className="font-medium">
              {' '}
              {detailHistory.orderDetail.cstPhoneNumber}
            </div>
          </div>
        </div>
        <div className="border-2 rounded-md">
          <div className="w-full md:flex sm:justify-between border-b-2 px-2">
            <div className="md:w-1/2 ">
              <div className="font-medium">
                Flight ID {detailHistory.orderDetail.flightId}
              </div>
            </div>
            <div className="pr-2 sm:text-end">
              <div className="font-medium">
                Purchase Completed on {purchaseAt}
              </div>
            </div>
          </div>

          <div className="md:flex ">
            {/* Left */}
            <div className="flex items-center md:justify-start flex-col md:flex-row p-3 md:items-center  md:w-1/2 border-r-2 md:border-b-2">
              <img
                className="w-32 md:w-30 md:h-20 my-5 md:my-0"
                src={garudaLogo}
                alt="img-plane"
              />
              <div className="md:ml-4 flex flex-col md:justify-center text-center md:text-start">
                <span className="text-sm s">
                  From: {schedule.originAirportCity} (
                  {schedule.originAirportName})
                </span>
                <span className="text-sm s">
                  To: {schedule.destinationAirportCity} (
                  {schedule.destinationAirportName})
                </span>
                <p className="text-sm">
                  {format(
                    new Date(schedule.departureTime),
                    'EEEE, d MMMM yyyy'
                  )}
                </p>
                <p className="text-sm">
                  {detailHistory.passengerTicketLists.length} Passengers
                </p>
              </div>
            </div>
            {/* center */}
            <div className="md:w-1/2 md:border-b-2">
              <div className="md:flex justify-center gap-3 p-3">
                <div className="flex flex-col gap-2 text-end w-1/3 sm:w-full sm:text-start">
                  <span className="text-gray-400 ">
                    {schedule.originAirportCode}
                  </span>
                  <span className="text-black text-sm">
                    {format(new Date(schedule.departureTime), 'KK:mm a')}
                  </span>
                </div>
                <div className="flex flex-col text-center w-1/2 md:mx-4 my-3 mx-auto">
                  <span className="text-gray-400 text-xs font-semibold">
                    {schedule.hours}h {schedule.minutes}m
                  </span>
                  <div className="flex  items-center">
                    <div className="h-3 w-4 rounded-full border-solid border border-gray-400 transform translate-x-[1px]"></div>
                    <div className="w-full h-[1.5px] bg-gray-400"></div>
                    <div className="h-3 w-4 rounded-full border-solid border border-gray-400 bg-gray-400 transform -translate-x-[1px]"></div>
                  </div>
                  <span className="text-gray-400"></span>
                </div>
                <div className="flex flex-col gap-2 text-center w-3/4 items-end">
                  <span className="text-black text-sm">
                    {format(new Date(schedule.arrivalTime), 'KK:mm a')}
                  </span>
                  <span className="text-gray-400">
                    {schedule.destinationAirportCode}
                  </span>
                </div>
              </div>
              <div className="flex mt-3 justify-between px-3 pb-3 text-sm font-medium">
                <div className="">Max Cabin: {schedule.maxCabin}kg/ticket</div>
                <div className="">
                  Max Baggage: {schedule.maxBaggage}kg/ticket
                </div>
              </div>
            </div>
            {/* right */}
          </div>
          <div className="text-center mt-3 font-bold">List Passengers</div>
          <div className="flex justify-between flex-wrap items-center p-2 gap-5">
            {detailHistory.passengerTicketLists.map((item, i) => {
              return (
                <div className="text-sm">
                  <table>
                    <tbody>
                      <tr>
                        <th className="w-30 text-start">Ticket Id</th>
                        <td>: {item.ticketId}</td>
                      </tr>
                      <tr>
                        <th className="w-30 text-start">Passenger Title</th>
                        <td>: {item.passengerTitle}</td>
                      </tr>
                      <tr>
                        <th className="w-30 text-start">Passenger Name</th>
                        <td>: {item.passengerName}</td>
                      </tr>
                      <tr>
                        <th className="w-30 text-start">Seat No</th>
                        <td>: {item.seatNo}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailHistory;
