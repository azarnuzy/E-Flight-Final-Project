import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import MyOrdersPage from '../pages/MyOrdersPage';
import { Login } from '../pages/Authentication/Login';
import { Register } from '../pages/Authentication/Register';
import FlightList from '../pages/FlightList';
import DetailFlight from '../components/DetailFlight/DetailFlight';
import Home from '../pages/Home';
import { Notification } from '../pages/Notification';
import { PaymentPage } from '../pages/PaymentPage';
import Layout from '../components/HandleRoute/Layout';
import RequireAuth from '../components/HandleRoute/RequireAuth';
import BookingList from '../pages/BookingList';
import Unauthorized from '../components/HandleRoute/Unauthorized';
import Missing from '../components/HandleRoute/Missing';
import WaitingList from '../pages/WaitingList';
import { AboutUs } from '../pages/Footer/AboutUs';
import { ContactUs } from '../pages/Footer/ContactUs';
import TermOfUse from '../pages/Footer/TermUse';

export default function RoutesComponents() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/flight/search/" element={<FlightList />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/termsOfUse" element={<TermOfUse />} />
        {/* protect admin page */}
        <Route path="/admin" element={<RequireAuth allowedRoles={['ADMIN']} />}>
          <Route path="bookingList" element={<BookingList />} />
          <Route path="waitingList" element={<WaitingList />} />
        </Route>
        {/* protect user page */}
        <Route element={<RequireAuth allowedRoles={['ADMIN', 'BUYER']} />}>
          <Route path="/notification" element={<Notification />} />
          <Route path="/myprofile" element={<ProfilePage />} />
          <Route path="/flight/:id" element={<DetailFlight />} />
          <Route path="/myorder" element={<MyOrdersPage />} />
          <Route path="/detailOrder/" element={<DetailFlight />} />
          <Route path="/payment/:id" element={<PaymentPage />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}
