import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import SideBarProfile from '../components/UserProfile/SideBarProfile';
import OrderHistory from '../components/UserProfile/OrderHistory';
import Footer from '../components/Footer/Footer';


export default function ProfilePage() {
    return (
        <div>
            <Navbar />
            <div className=' md:flex md:max-w-[1024px] mx-auto md:mt-24 md:justify-between'>
                {/* Sidebar */}
                <SideBarProfile />
                {/* Order History */}
                <OrderHistory />
            </div >
            <Footer />
        </div >
    )
}
