import React from 'react';
import CardFlight from '../components/FlightList/CardFlight';
import FlightSearch from '../components/FlightList/FlightSearch';
import UserFlight from '../components/FlightList/UserFlight';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function FlightList() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1280px] w-full mx-auto flex">
        <div className="flex mx-10 w-full gap-3 justify-center">
          <UserFlight />
          <div className="w-full">
            <FlightSearch />
            <CardFlight />
            <CardFlight />
            <CardFlight />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
