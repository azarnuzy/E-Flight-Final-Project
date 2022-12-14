import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import DetailPemesanan from './DetailPemesanan';
import DetailPenumpang from './DetailPenumpang';
import TotalFlight from './TotalFlight';
// import Footer from '../Footer/Footer'

export default function DetailFlight() {
  return (
    <div>
      <Navbar />
      <div className="md:flex gap-3 md:max-w-[1024px] mx-auto md:mt-24 p-2 ">
        <div className="md:w-2/3">
          {/* <DetailPemesanan /> */}
          <DetailPenumpang />
        </div>
        <div className="md:w-1/3">
          <TotalFlight />
        </div>
      </div>
      <Footer />
    </div>
  );
}
