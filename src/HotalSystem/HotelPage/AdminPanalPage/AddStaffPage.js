import React from "react";
import AdminNavigation from "../../HotalComponents/AdminPortal/AdminNavigation";
import AddStaff from "../../HotalComponents/AdminPortal/AddStaff";

function AddStaffPage() {
  return (
    <>
      {/* <AdminNavigation /> */}
      <div className=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="mb-10">
            {/* <div className="flex justify-center">
                            <img
                                alt=""
                                className="h-24 w-24"
                                src="https://img.freepik.com/premium-vector/forkspoon-logo-icon-vector-illustration_598213-6842.jpg?size=626&ext=jpg" />
                        </div> */}
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
