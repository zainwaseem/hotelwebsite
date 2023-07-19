import React from "react";
import AdminNavigation from "../../HotalComponents/AdminPortal/AdminNavigation";
import AllStaff from "../../HotalComponents/AdminPortal/AllStaff";
import { Link } from "react-router-dom";

function AllStaffPage() {
  return (
    <>
      {/* <AdminNavigation /> */}
      {/* <div className="px-8 py-5">
        <Link
          to="/AddStaff"
          className="px-1 bg-blue-500 p-2 m-5 font-medium leading-6 text-white hover:text-white"
        >
          Add-Staff
        </Link>
      </div> */}

      <AllStaff />
    </>
  );
}

export default AllStaffPage;
