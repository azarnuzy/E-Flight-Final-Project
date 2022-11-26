import React from 'react'
// import { Link } from 'react-router-dom'

import SideBarProfile from '../components/UserProfile/SideBarProfile';
import RecentOrders from '../components/UserProfile/RecentOrders';


export default function ProfilePage() {
    return (
        <div>
            <div className=' md:flex md:max-w-[1024px] mx-auto md:mt-10 md:justify-between'>
                {/* Sidebar */}
                <SideBarProfile />

            </div >
            {/* Bottom Content */}
            <RecentOrders />
        </div >
    )
}
