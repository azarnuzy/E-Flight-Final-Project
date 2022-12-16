import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import {
  bookFlight,
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

  const name = useSelector(getNamePassenger);
  const title = useSelector(getTitlePassenger);
  const seat = useSelector(getSeatNo);
  const uId = JSON.parse(localStorage.getItem('user-info')).userId;
  const shceduleId = searchParams.get('scheduleId');
  const totalPassenger = searchParams.get('totalPassenger');

  const dispatch = useDispatch();

  const passenger = {};

  // useEffect(() => {
  //   dispatch(bookFlight({ uId, shceduleId, seat, totalPassenger }));
  // }, []);

  return (
    <div>
      <Navbar />
      <div className="md:flex gap-3 md:max-w-[1024px] mx-auto md:mt-24 p-2 ">
        <div className="md:w-2/3">
          {/* <DetailPemesanan /> */}
          <DetailPenumpang />
          <div className="w-full flex justify-end">
            <Link
              to={'/payment'}
              className="py-2 px-4 bg-primary text-white font-medium rounded-full hover:opacity-80"
            >
              Lanjutkan Pembayaran
            </Link>
          </div>
        </div>
        <div className="md:w-1/3">
          <TotalFlight />
        </div>
      </div>
      <Footer />
    </div>
  );
}
