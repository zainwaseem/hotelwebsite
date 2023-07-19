import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../../Url";

function GuestProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [username, setUsername] = useState(currentUser?.username);
  const [email, setEmail] = useState(currentUser?.email);
  const [password, setPassword] = useState();
  const [changepassword, setchangePassword] = useState(false);
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleUsernameChange = (e) => { 
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleconfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordUpdate = async () => {
    // if (username === "" || email === "") {
    //   setErrorMsg("Please enter enter User Name and email");
    // }
    try {
      const res = await axios.patch(`${BACKEND_URL}users/${currentUser?._id}`, {
        username,
        email,
      });
      if (res.data) {
        toast(res.data.message);
        setEmail(``);
        setUsername(``);
      }
    } catch (err) {
      toast(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Guest Profile</h1>
      {errorMsg && <div className="text-red-500 mb-4">{errorMsg}</div>}

      {showToast && (
        <div className="text-green-500 mb-4">Profile has been updated</div>
      )}

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={handleEmailChange}
          className="border border-gray-300 p-2 rounded"
          placeholder={currentUser?.email}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder={currentUser?.username}
          onChange={handleUsernameChange}
          className="border border-gray-300 p-2 rounded"
        />
      </div>

      {changepassword && (
        <>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmpassword"
              className="block text-sm font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              value={confirmpassword}
              onChange={handleconfirmPasswordChange}
              className="border border-gray-300 p-2 rounded"
            />
          </div>
        </>
      )}

      <button
        onClick={handlePasswordUpdate}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Update Password
      </button>
    </div>
  );
}

export default GuestProfile;
