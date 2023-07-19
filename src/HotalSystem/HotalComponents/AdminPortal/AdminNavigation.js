import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_URL } from "../../../Url";
import { toast } from "react-toastify";
import axios from "axios";

function AdminNavigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser?.user);
  async function handleLogout() {
    try {
      const res = await axios.get(`${BACKEND_URL}logout`);
      dispatch(logout());
      toast(res.data.message);
      // navigate(`/`);
      localStorage.removeItem("persist:root");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              <img
                alt=""
                className="h-14 w-14"
                src="https://img.freepik.com/premium-vector/forkspoon-logo-icon-vector-illustration_598213-6842.jpg?size=626&ext=jpg"
              />
              <span className="text-indigo-600">.</span>
            </span>
          </a>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            {/* <Link
              to="/Admin"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Add-Room
            </Link> */}
            {/* <Link
              to="/Admin/AvalibleRoom"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Avalible Room
            </Link>
            <Link
              to="/Admin/BookedRoom"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Booked Room
            </Link>
            <Link
              to="/AllStaff"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Staff
            </Link>
            <Link
              to="/AddStaff"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Add-Staff
            </Link>
            <Link
              to="/Guest"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Rooms
            </Link>
            <Link
              to="/YourRoom"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Booked-Room
            </Link>
            <Link
              to="/History"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              History
            </Link>
            <Link
              to="/Feedback"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Feedback
            </Link>
            <Link
              to="/Profile"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Profile
            </Link> */}
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          {/* <Link to="/Login" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                Sign in
            </Link> */}
          <Link
            to="/"
            onClick={handleLogout}
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Log out
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AdminNavigation;
