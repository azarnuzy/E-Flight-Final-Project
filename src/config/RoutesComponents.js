import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import MyOrdersPage from '../pages/MyOrdersPage'

export default function RoutesComponents() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
                <Route path="/myorder" element={<MyOrdersPage />} />
            </Routes>
        </BrowserRouter>
    );
}
