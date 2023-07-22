import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/userSlice";

function HomeNavigation() {
  const [showHome, setShowHome] = useState();
  const [showContact, setShowContact] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser?.role);
  const dispatch = useDispatch();

  function handleLogout() {
    localStorage.removeItem("persist:root");
    localStorage.clear();
    dispatch(logout());
  }
  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            href="#/"
          >
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              <img
                alt=""
                className="h-14 w-14"
                src="https://previews.123rf.com/images/dvolkovkir1980/dvolkovkir19801805/dvolkovkir1980180500071/101914107-hotel-hotel-icon-five-star-hotel-on-a-white-background-flat-design-vector-illustration-vector.jpg"
              />
              <span className="text-indigo-600">{currentUser?.name}</span>
            </span>
          </a>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            {currentUser?.role && (
              <>
                <Link
                  to="/Admin/AvalibleRoom"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Avalible Room
                </Link>

                <Link
                  to="/AllStaff"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Staff
                </Link>

                <Link
                  to="/Guest"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Rooms
                </Link>
                <Link
                  to="/Feedback"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Feedback
                </Link>
                <Link
                  to="/Profile"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                >
                  Profile
                </Link>
              </>
            )}
            {currentUser?.role === "admin" && (
              <Link
                to="/Users"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Users
              </Link>
            )}
          </nav>
        </div>

        {!currentUser?.role ? (
          <>
            <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
              <Link
                to="/Login"
                className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
              >
                Sign in
              </Link>
              <Link
                to="/Signup"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Sign up
              </Link>
            </div>
          </>
        ) : (
          <Link
            to="/"
            onClick={handleLogout}
            className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
          >
            Logout
          </Link>
        )}
      </div>
    </section>
  );
}

export default HomeNavigation;
