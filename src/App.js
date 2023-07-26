import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Home from "./HotalSystem/HotelPage/HomePage/Home";
import Content from "./HotalSystem/HotelPage/HomePage/Content";
import LoginPage from "./HotalSystem/HotelPage/HomePage/LoginPage";
import SignupPage from "./HotalSystem/HotelPage/HomePage/SignupPage";
import GuestPage from "./HotalSystem/HotelPage/GuestPanalPage/GuestPage";
import BookRoom from "./HotalSystem/HotalComponents/GuestPortal/BookRoom";
import YourRoomPage from "./HotalSystem/HotelPage/GuestPanalPage/YourRoomPage";
import GuestProfilePage from "./HotalSystem/HotelPage/GuestPanalPage/GuestProfilePage";
import GuestHistoryPage from "./HotalSystem/HotelPage/GuestPanalPage/GuestHistoryPage";
import GuestFeedbackpage from "./HotalSystem/HotelPage/GuestPanalPage/GuestFeedbackpage";
import FeedbackReport from "./HotalSystem/FeedbackReport";
import StaffPage from "./HotalSystem/HotelPage/StaffPanalPage/StaffPage";
import AdminPage from "./HotalSystem/HotelPage/AdminPanalPage/AdminPage";
import AllStaffPage from "./HotalSystem/HotelPage/AdminPanalPage/AllStaffPage";
import Users from "./HotalSystem/HotalComponents/AdminPortal/Users";
import AddStaffPage from "./HotalSystem/HotelPage/AdminPanalPage/AddStaffPage";
import AvalibleRoomPage from "./HotalSystem/HotelPage/AdminPanalPage/AvalibleRoomPage";
import BookRoomPage from "./HotalSystem/HotelPage/AdminPanalPage/BookRoomPage";
import { Route, Routes } from "react-router-dom";
import HomeNavigation from "./HotalSystem/HotalComponents/Home/HomeNavigation";
import Inventory from "./HotalSystem/Inventory";
import UpdateInventory from "./HotalSystem/UpdateInventory";
import AddInventory from "./HotalSystem/AddInventory";

export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <HomeNavigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/updatinventory/:id" element={<UpdateInventory />} />
        <Route path="/addinventory" element={<AddInventory />} />
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
        <Route path="/AvalibleRoom" element={<AvalibleRoomPage />} />
        <Route path="/BookedRoom" element={<BookRoomPage />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
    </>
  );
}
