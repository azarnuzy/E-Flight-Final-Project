import React from 'react';
import ListBooking from '../components/AdminDashboard/ListBooking';
import Sidebar from '../components/AdminDashboard/Sidebar';

function Admin() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-5">
        <ListBooking />
      </div>
    </div>
  );
}

export default Admin;
