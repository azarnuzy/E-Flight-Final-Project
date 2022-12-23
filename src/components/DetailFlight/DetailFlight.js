import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  bookFlight,
  bookFlight2,
  getBooking,
  getNamePassenger,
  getOrders,
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
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const order = useSelector(getOrders);

  const name = useSelector(getNamePassenger);
  const title = useSelector(getTitlePassenger);
  const seat = useSelector(getSeatNo);
  const uId = JSON.parse(localStorage.getItem('user-info')).userId;
  const shceduleId =
    searchParams.get('scheduleId')?.length > 0
      ? searchParams.get('scheduleId')
      : order.myFlight[0].shceduleId;
  const shceduleId2 =
    searchParams.get('scheduleId2')?.length > 0
      ? searchParams.get('scheduleId2')
      : order.myFlight[1].shceduleId;

  const totalPs = Number(searchParams.get('totalPassenger'));
  const seatClass = searchParams.get('sc');
  const price =
    searchParams.get('pr')?.length > 0
      ? searchParams.get('pr')
      : order.myFlight[0].price;
  const price2 =
    searchParams.get('pr2')?.length > 0
      ? searchParams.get('pr2')
      : order.myFlight[1].price;
  const amount = (Number(price.replace(/[^0-9-]+/g, '')) / 100) * totalPs;
  const amount2 = (Number(price2.replace(/[^0-9-]+/g, '')) / 100) * totalPs;

  const dispatch = useDispatch();

  const passengers = [];
  // console.log(name[0]?.length, title, seat);

  const isFullFill = (title, name, seatNo) => {
    let cek = false;
    for (let i = 0; i < totalPs; i++) {
      if (
        title[i]?.length > 0 &&
        name[i]?.length > 0 &&
        seatNo[i]?.length > 0
      ) {
        cek = true;
      } else {
        cek = false;
      }
    }

    return cek;
  };
  // const bookingId = useSelector(getBooking.bookingId);
  const handleOrder = async () => {
    if (isFullFill(title, name, seat)) {
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
      let booking2;
      if (shceduleId2?.length > 0) {
        booking2 = await dispatch(
          bookFlight2({
            uId,
            shceduleId: shceduleId2,
            seatClass,
            totalPs,
            amount: amount2,
            passengers,
          })
        );
      }
      navigate(
        `/payment/${
          booking.payload.bookingId
        }?scheduleId=${shceduleId}&scheduleId2=${shceduleId2}&booking2=${
          booking2?.payload.bookingId || ''
        }`
      );
    }
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
              className={`py-2 px-4 ${
                isFullFill(title, name, seat)
                  ? 'bg-primary text-white hover:opacity-80'
                  : 'bg-gray-200 text-gray-600 cursor-default'
              } bg-primary text-white font-medium rounded-full `}
            >
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
        <div className="md:w-1/3">
          <TotalFlight total={amount} total2={amount2} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
