import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./HotelPage/HomePage/Home";
import LoginPage from "./HotelPage/HomePage/LoginPage";
import SignupPage from "./HotelPage/HomePage/SignupPage";
import Content from "./HotelPage/HomePage/Content";
import AdminPage from "./HotelPage/AdminPanalPage/AdminPage";
import GuestPage from "./HotelPage/GuestPanalPage/GuestPage";
import StaffPage from "./HotelPage/StaffPanalPage/StaffPage";
import BookRoom from "./HotalComponents/GuestPortal/BookRoom";
import BookRoomPage from "./HotelPage/AdminPanalPage/BookRoomPage";
import AvalibleRoomPage from "./HotelPage/AdminPanalPage/AvalibleRoomPage";
import GuestProfilePage from "./HotelPage/GuestPanalPage/GuestProfilePage";
import GuestHistoryPage from "./HotelPage/GuestPanalPage/GuestHistoryPage";
import GuestFeedbackpage from "./HotelPage/GuestPanalPage/GuestFeedbackpage";
import AddStaffPage from "./HotelPage/AdminPanalPage/AddStaffPage";
import AllStaffPage from "./HotelPage/AdminPanalPage/AllStaffPage";
import YourRoomPage from "./HotelPage/GuestPanalPage/YourRoomPage";
import { useSelector } from "react-redux";
import HomeNavigation from "./HotalComponents/Home/HomeNavigation";
import FeedbackReport from "./FeedbackReport";
import Users from "./HotalComponents/AdminPortal/Users";
// import AddRoom from './HotalComponents/StaffPortal/AddRoom';

function HotelManagement() {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser && currentUser?.role);
  return (
    <>
      <HomeNavigation />

      <Routes>
        {/* {!currentUser.role ? <Route path="/" element={<Home />} /> : <Route path={`${currentUser?.role}`} element={<Home />}/>} */}
        <Route path="/" element={<Home />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Guest" element={<GuestPage />} />
        <Route path="/RoomBooking" element={<BookRoom />} />
        <Route path="/YourRoom" element={<YourRoomPage />} />
        <Route path="/Profile" element={<GuestProfilePage />} />
        <Route path="/History" element={<GuestHistoryPage />} />
        <Route path="/Feedback" element={<GuestFeedbackpage />} />
        <Route path="/feedbacks" element={<FeedbackReport />} />
        <Route path="/Staff" element={<StaffPage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/AllStaff" element={<AllStaffPage />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/createusers" element={<AddStaffPage />} />
        <Route path="/Admin/AvalibleRoom" element={<AvalibleRoomPage />} />
        <Route path="/Admin/BookedRoom" element={<BookRoomPage />} />
      </Routes>
    </>
  );
}

export default HotelManagement;
