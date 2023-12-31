import React from "react";
import HomeNavigation from "../../HotalComponents/Home/HomeNavigation";
import Login from "../../HotalComponents/Authentication/Login";

function LoginPage() {
  return (
    <>
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="mb-2">
            <div className="flex justify-center">
              <img
                alt=""
                className="h-20 w-20"
                src="https://previews.123rf.com/images/dvolkovkir1980/dvolkovkir19801805/dvolkovkir1980180500071/101914107-hotel-hotel-icon-five-star-hotel-on-a-white-background-flat-design-vector-illustration-vector.jpg"
              />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login to your account
            </h2>
          </div>
          <Login />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
