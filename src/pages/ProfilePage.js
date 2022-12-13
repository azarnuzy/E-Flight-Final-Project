import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';

import SideBarProfile from '../components/UserProfile/SideBarProfile';
import AccountInformation from '../components/UserProfile/AccountInformation';
import RecentOrders from '../components/UserProfile/RecentOrders';
import Footer from '../components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../features/user/userSlice';

export default function ProfilePage() {
  return (
    <div>
      <Navbar />
      <div className="md:flex md:max-w-[1024px] mx-auto md:mt-24 md:justify-between">
        {/* Sidebar */}
        <SideBarProfile />
        {/* Account Information */}
        <AccountInformation />
      </div>
      {/* Bottom Content */}
      <RecentOrders />
      <Footer />
    </div>
  );
}
