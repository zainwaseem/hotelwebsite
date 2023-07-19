// import { Routes, Route } from "react-router-dom";
// import LoginPage from "./HotalSystem/pages/LoginPage";
// import SignupPage from "./HotalSystem/pages/SignupPage";
// import RoomPage from "./HotalSystem/pages/RoomPage";
// import HomePage from "./HotalSystem/pages/HomePage";
// import { Home, Contact } from "./HotalSystem/components/Home/Home";
// import RoomManage from "./HotalSystem/pages/Staffpages/RoomManage";
// import { useState } from "react";
// import AvaliableRoom from "./HotalSystem/pages/Staffpages/AvaliableRoom";
// import StaffDuty from "./HotalSystem/components/StaffManagement/StaffDuty";
// import AddStaff from "./HotalSystem/components/StaffManagement/AddStaff";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HotelManagement from "./HotalSystem/HotelManagement";
import { useSelector } from "react-redux";

export default function App() {
  const { currentUser } = useSelector((state) => state.user);

  // console.log(currentUser && currentUser?.role);
  // const [userType, setUserType] = useState(null);
  //
  return (
    <>
      <HotelManagement />
      {/* <Routes>

      <Route path="/" element={<HomePage props={true} />} />
      <Route path="/Signin" element={<LoginPage />} />
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/Room" element={<RoomPage />} />
      <Route path="/Form" element={<RoomManage />} />
      <Route path="/AvaliableRoom" element={<AvaliableRoom />} />
      <Route path="/StaffDuty" element={<StaffDuty />} />
      <Route path="/AddStaff" element={<AddStaff />} />

    </Routes> */}

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
