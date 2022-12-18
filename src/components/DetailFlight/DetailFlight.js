import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  bookFlight,
  getBooking,
  getNamePassenger,
  getSeatNo,
  getTitlePassenger,
} from '../../features/order/orderSlice';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import DetailPemesanan from './DetailPemesanan';
import DetailPenumpang from './DetailPenumpang';
import ListSeat from './ListSeat';
import TotalFlight from './TotalFlight';
// import Footer from '../Footer/Footer'

export default function DetailFlight() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const name = useSelector(getNamePassenger);
  const title = useSelector(getTitlePassenger);
  const seat = useSelector(getSeatNo);
  const uId = JSON.parse(localStorage.getItem('user-info')).userId;
  const shceduleId = searchParams.get('scheduleId');
  const totalPs = Number(searchParams.get('totalPassenger'));
  const seatClass = searchParams.get('sc');
  const amount =
    (Number(searchParams.get('pr').replace(/[^0-9-]+/g, '')) / 100) * totalPs;
  const dispatch = useDispatch();

  const passengers = [];

  // console.log(name, title, seat);

  // const bookingId = useSelector(getBooking.bookingId);
  const handleOrder = async () => {
    for (let i = 0; i < totalPs; i++) {
      passengers.push({
        title: title[i],
        name: name[i],
        seatNo: seat[i],
      });
    }
    const booking = await dispatch(
      bookFlight({ uId, shceduleId, seatClass, totalPs, amount, passengers })
    );

    // console.log(booking.pay);
    navigate(`/payment/${booking.payload.bookingId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="md:flex gap-3 md:max-w-[1024px] mx-auto md:mt-24 p-2 ">
        <div className="md:w-2/3">
          {/* <DetailPemesanan /> */}
          <DetailPenumpang />
          <div className="w-full flex justify-end">
            <button
              onClick={handleOrder}
              className="py-2 px-4 bg-primary text-white font-medium rounded-full hover:opacity-80"
            >
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
        <div className="md:w-1/3">
          <TotalFlight total={amount} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
