import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Authentication/Login';
import { Register } from '../pages/Authentication/Register';
import { Home } from '../pages/Home';

export default function RoutesComponents() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
        </Routes>
    )
}
