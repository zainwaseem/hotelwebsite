import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './HotelPage/HomePage/Home';
import LoginPage from './HotelPage/HomePage/LoginPage';
import SignupPage from './HotelPage/HomePage/SignupPage';
import Content from './HotelPage/HomePage/Content';
import AdminPage from './HotelPage/AdminPanalPage/AdminPage';
import GuestPage from './HotelPage/GuestPanalPage/GuestPage';
import StaffPage from './HotelPage/StaffPanalPage/StaffPage';
import BookRoom from './HotalComponents/GuestPortal/BookRoom';
import BookRoomPage from './HotelPage/StaffPanalPage/BookRoomPage';
import AvalibleRoomPage from './HotelPage/StaffPanalPage/AvalibleRoomPage';
// import AddRoom from './HotalComponents/StaffPortal/AddRoom';

function HotelManagement() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Content' element={<Content />} />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/Signup' element={<SignupPage />} />
            <Route path='/Admin' element={<AdminPage />} />
            <Route path='/Guest' element={<GuestPage />} />
            <Route path='/RoomBooking' element={<BookRoom />} />
            <Route path='/Staff' element={<StaffPage />} />
            <Route path='/Staff/AvalibleRoom' element={<AvalibleRoomPage />} />
            <Route path='/Staff/BookedRoom' element={<BookRoomPage />} />
        </Routes>
    )
}

export default HotelManagement