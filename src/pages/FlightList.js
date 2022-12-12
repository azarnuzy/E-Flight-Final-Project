import React from 'react';
import { useSelector } from 'react-redux';
import CardFlight from '../components/FlightList/CardFlight';
import FlightSearch from '../components/FlightList/FlightSearch';
import UserFlight from '../components/FlightList/UserFlight';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { getSchedules } from '../features/search/searchSlice';

// const data = [
//   {
//     airplane: 'Garuda Indonesia',
//     departure_time: '08:25',
//     arrival_time: '09:55',
//     from_airport: 'JKT',
//     to_airport: 'YGK',
//     duration: '3h 05m',
//     distance: 'direct',
//     price: 'Rp515.000',
//   },
//   {
//     airplane: 'Garuda Indonesia',
//     departure_time: '13:05',
//     arrival_time: '15:35',
//     from_airport: 'JPN',
//     to_airport: 'INA',
//     duration: '8h 05m',
//     distance: '4 Stop',
//     price: 'Rp5.515.000',
//   },
//   {
//     airplane: 'Garuda Indonesia',
//     departure_time: '08:25',
//     arrival_time: '09:55',
//     from_airport: 'JKT',
//     to_airport: 'SIN',
//     duration: '3h 05m',
//     distance: 'direct',
//     price: 'Rp1.515.000',
//   },
//   {
//     airplane: 'Air Asia',
//     departure_time: '08:25',
//     arrival_time: '09:55',
//     from_airport: 'JKT',
//     to_airport: 'YGK',
//     duration: '3h 05m',
//     distance: 'direct',
//     price: 'Rp515.000',
//   },
//   {
//     airplane: 'Batik Air',
//     departure_time: '13:05',
//     arrival_time: '15:35',
//     from_airport: 'JPN',
//     to_airport: 'INA',
//     duration: '8h 05m',
//     distance: '4 Stop',
//     price: 'Rp5.515.000',
//   },
//   {
//     airplane: 'Fly Emirates',
//     departure_time: '08:25',
//     arrival_time: '09:55',
//     from_airport: 'JKT',
//     to_airport: 'SIN',
//     duration: '3h 05m',
//     distance: 'direct',
//     price: 'Rp1.515.000',
//   },
// ];

export default function FlightList() {
  const schedules = useSelector(getSchedules);
  // console.log(schedules);
  return (
    <div>
      <Navbar />
      <div className="max-w-[1280px] w-full mx-auto flex">
        <div className="flex lg:flex-row flex-col md:mx-10 w-full gap-3 justify-center">
          <UserFlight />
          <div className="w-full">
            <FlightSearch />
            {schedules.map((item, i) => {
              return <CardFlight key={i} item={item} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
