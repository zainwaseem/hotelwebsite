import React from "react";
import AdminNavigation from "../../HotalComponents/AdminPortal/AdminNavigation";
import AddStaff from "../../HotalComponents/AdminPortal/AddStaff";

function AddStaffPage() {
  return (
    <>
      <div className=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="mb-10">

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              create an account for Staff
            </h2>
          </div>
          <AddStaff />
        </div>
      </div>
    </>
  );
}

export default AddStaffPage;
