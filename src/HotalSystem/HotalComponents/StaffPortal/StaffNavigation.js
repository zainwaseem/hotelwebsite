import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../../Url";
import { toast } from "react-toastify";
import axios from "axios";
import { logout } from "../../../redux/userSlice";

function StaffNavigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser?.user);
  async function handlelogout() {
    try {
      const res = await axios.get(`${BACKEND_URL}logout`);
      dispatch(logout());
      toast(res.data.message);
      navigate(`/`);
      //   localStorage.removeItem("persist:root");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#/"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              <img
                alt=""
                className="h-14 w-14"
                src="https://img.freepik.com/premium-vector/forkspoon-logo-icon-vector-illustration_598213-6842.jpg?size=626&ext=jpg"
              />
              {/* <span className="text-indigo-600">.</span> */}
            </span>
          </a>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            {/* <Link
              to="/Staff"
              className="px-1 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Add-Room
            </Link>
            <Link
              to="/Staff/AvalibleRoom"
              className="px-1 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Avalible Room
            </Link>
            <Link
              to="/Staff/BookedRoom"
              className="px-1 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Booked Room
            </Link>
            <Link className="px-1 font-medium leading-6 text-gray-600 hover:text-gray-900">
              Duty
            </Link>
            <Link
              to="/Admin"
              className="px-1 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Add-Room
            </Link>
            <Link
              to="/Admin/AvalibleRoom"
              className="px-1 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Avalible Room
            </Link>
            <Link
              to="/Admin/BookedRoom"
              className="px-1 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Booked Room
            </Link>
            <Link
              to="/AllStaff"
              className="px-1 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Staff
            </Link>
            <Link
              to="/AddStaff"
              className="px-1 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Add-Staff
            </Link> */}

            {/* <Link
              to="/Guest"
              className="block py-2   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Rooms
            </Link>
            <Link
              to="/YourRoom"
              className="block py-2   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Booked-Room
            </Link>
            <Link
              to="/History"
              className="block py-2   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              History
            </Link>
            <Link
              to="/Feedback"
              className="block py-2   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Feedback
            </Link>
            <Link
              to="/Profile"
              className="block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Profile
            </Link> */}
            <Link
              to="/"
              className="text-white whitespace-no-wrap p-1 bg-indigo-600 border border-transparent rounded-sm shadow-sm"
              onClick={handlelogout}
            >
              Log out
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default StaffNavigation;
