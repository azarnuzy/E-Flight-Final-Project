import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Authentication/Login';
import { Register } from '../pages/Authentication/Register';
import FlightList from '../pages/FlightList';
import Home from '../pages/Home';

export default function RoutesComponents() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/flight/search/" element={<FlightList />} />
    </Routes>
  );
}
