import React from 'react';
import { useSelector } from 'react-redux';
import CardFlight from '../components/FlightList/CardFlight';
import FlightSearch from '../components/FlightList/FlightSearch';
import UserFlight from '../components/FlightList/UserFlight';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { getSchedules } from '../features/search/searchSlice';
import replacer from '../assets/no-results.png'

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
          <div className="w-full mb-[115px]">
            <FlightSearch />
            {checkSchedules() ? (
              schedules.map((item, i) => {
                return <CardFlight key={i} item={item} />;
              })
            ) : (
              <div>
                <img src={replacer} alt='' className='mx-auto w-[250px] mt-20' />
              </div>
              
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}