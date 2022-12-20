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

export default function RoutesComponents() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/flight/search/" element={<FlightList />} />

        <Route element={<RequireAuth allowedRoles={''} />}>
          <Route path="/notification" element={<Notification />} />
          <Route path="/myprofile" element={<ProfilePage />} />
          <Route path="/flight/:id" element={<DetailFlight />} />
          <Route path="/myorder" element={<MyOrdersPage />} />
          <Route path="/detailOrder/" element={<DetailFlight />} />
          <Route path="/payment/:id" element={<PaymentPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
