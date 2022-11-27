import React from 'react'
// import { Link } from 'react-router-dom'

import SideBarProfile from '../components/UserProfile/SideBarProfile';
import OrderHistory from '../components/UserProfile/OrderHistory';
import RecentOrders from '../components/UserProfile/RecentOrders';


export default function ProfilePage() {
    return (
        <div>
            <div className=' md:flex md:max-w-[1024px] mx-auto md:mt-10 md:justify-between'>
                {/* Sidebar */}
                <SideBarProfile />
                {/* Order History */}
                <OrderHistory />
            </div >
            {/* Bottom Content */}
            <RecentOrders />
        </div >
    )
}
