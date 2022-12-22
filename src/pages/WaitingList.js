import React from 'react';
import Sidebar from '../components/AdminDashboard/Sidebar';
import ComponentWaitingList from '../components/AdminDashboard/ComponentWaitingList';

function WaitingList() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-5">
        <ComponentWaitingList />
      </div>
    </div>
  );
}

export default WaitingList;
