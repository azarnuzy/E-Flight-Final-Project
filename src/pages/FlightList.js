import React from 'react';
import { useSelector } from 'react-redux';
import CardFlight from '../components/FlightList/CardFlight';
import FlightSearch from '../components/FlightList/FlightSearch';
import UserFlight from '../components/FlightList/UserFlight';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { getSchedules } from '../features/search/searchSlice';

export default function FlightList() {
  const schedules = useSelector(getSchedules);
  // console.log(schedules);
  const checkSchedules = () => {
    if (schedules.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-[1280px] w-full mx-auto flex">
        <div className="flex lg:flex-row flex-col md:mx-10 w-full gap-3 justify-center">
          <UserFlight />
          <div className="w-full mb-28">
            <FlightSearch />
            {checkSchedules() ? (
              schedules.map((item, i) => {
                return <CardFlight key={i} item={item} />;
              })
            ) : (
              <h1 className="text-2xl my-20 text-center font-bold">
                Flight Not Found
              </h1>
            )}
            {/* {schedules.map((item, i) => {
              return <CardFlight key={i} item={item} />;
            })} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
