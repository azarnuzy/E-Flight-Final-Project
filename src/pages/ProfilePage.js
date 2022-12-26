import React from 'react';
import Navbar from '../components/Navbar/Navbar';

import SideBarProfile from '../components/UserProfile/SideBarProfile';
import AccountInformation from '../components/UserProfile/AccountInformation';
import Footer from '../components/Footer/Footer';

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
      <Footer />
    </div>
  );
}
