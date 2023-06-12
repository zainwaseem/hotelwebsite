import { Routes, Route } from "react-router-dom";
import LoginPage from "./HotalSystem/pages/LoginPage";
import SignupPage from "./HotalSystem/pages/SignupPage";
import RoomPage from "./HotalSystem/pages/RoomPage";

export default function App() {

  return <>
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Room" element={<RoomPage />} />
        </Routes>
      </div>
    </div>
  </>
}
