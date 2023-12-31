import React from "react";
import GuestNavigation from "../../HotalComponents/GuestPortal/GuestNavigation";
import Rooms from "../../HotalComponents/GuestPortal/Rooms";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function GuestPage() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      {currentUser.role === `admin` && (
        <div className="px-10 py-5 flex justify-between">
          <Link
            to="/Admin"
            className="px-1 bg-blue-500 p-2  font-medium leading-6 text-white hover:text-white"
          >
            Add-Room
          </Link>
          <Link
            to="/BookedRoom"
            className="px-1 bg-blue-500 p-2  font-medium leading-6 text-white hover:text-white"
          >
            Booked Rooms
          </Link>
        </div>
      )}
      <Rooms />
    </>
  );
}

export default GuestPage;
