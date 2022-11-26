import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';

export default function RoutesComponents() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
}
