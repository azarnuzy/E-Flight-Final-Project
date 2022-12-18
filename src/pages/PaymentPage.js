import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { SlArrowRight } from 'react-icons/sl';
import { getPayments } from '../features/payment/PaymentSlice';
import { useNavigate } from 'react-router-dom';
import TotalFlight from '../components/Payment/TotalFlight';

export const PaymentPage = () => {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.paymentOrder.payment);
  const navigate = useNavigate();

  const handlePayment = () => {
    Swal.fire({
      title: 'Confirm Payment?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        navigate('/myorder');
      }
    });
  };

  useEffect(() => {
    dispatch(getPayments());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="md:flex gap-3 md:max-w-[1024px] mx-auto md:mt-24 p-2 mt-20 ">
        <div className="md:w-2/3">
          <div className="bg-white md:ml-10 mb-2 p-3">
            <h5 className="font-semibold text-xl mx-auto">Metode Pembayaran</h5>
          </div>
          <div className="bg-white md:ml-10 border rounded-md mb-5 p-3 pb-3 -mt-2">
            <h5 className="font-semibold">Rekomendasi Metode Pembayaran</h5>
            <p className="text-sm mt-1 font-extralight">
              Nikmati benefit ekstra dengan metode pembayaran rekomendasi dari
              Flyket.com
            </p>
            {payments &&
              payments.map((item) => (
                <div
                  className="border-slate-200 border-t-2 mt-4 pt-4 cursor-pointer"
                  onClick={handlePayment}
                >
                  <div className="flex flex-row justify-between">
                    <p>{item.name}</p>
                    <SlArrowRight className="mt-1 text-md text-slate-500" />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="md:w-1/3">
          <TotalFlight />
        </div>
      </div>
      <Footer />
    </div>
  );
};
