import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { Login } from '../pages/Authentication/Login';
import { Register } from '../pages/Authentication/Register';
import Home from '../pages/Home';
import { Notification } from '../pages/Notification';

export default function RoutesComponents() {
  return (
    <Routes>
      <Route path='notification' element={<Notification/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
