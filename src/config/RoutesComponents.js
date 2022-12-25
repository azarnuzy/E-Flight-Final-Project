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
import { AboutUs } from '../pages/Footer/AboutUs';
import { ContactUs } from '../pages/Footer/ContactUs';
import TermOfUse from '../pages/Footer/TermUse';

export default function RoutesComponents() {
  return (
    <Routes>
      <Route path="/notification" element={<Notification />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/myprofile" element={<ProfilePage />} />
      <Route path="/myorder" element={<MyOrdersPage />} />
      <Route path="/flight/search/" element={<FlightList />} />
      <Route path="/detailOrder/" element={<DetailFlight />} />
      <Route path="/flight/:id" element={<DetailFlight />} />
      <Route path="/payment/:id" element={<PaymentPage />} />
      <Route path="/aboutUs" element={<AboutUs/>} />
      <Route path="/contactUs" element={<ContactUs/>} />
      <Route path="/termsOfUse" element={<TermOfUse/>} />
    </Routes>
  );
}
