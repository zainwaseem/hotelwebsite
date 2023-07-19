import React from "react";
import HomeNavigation from "../../HotalComponents/Home/HomeNavigation";
import Signup from "../../HotalComponents/Authentication/Signup";

function SignupPage() {
  return (
    <>
      {/* <HomeNavigation /> */}
      <div className=" flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-4">
          <div className="mb-10">
            <div className="flex justify-center">
              <img
                alt=""
                className="h-20 w-20"
                // src="https://img.freepik.com/premium-vector/forkspoon-logo-icon-vector-illustration_598213-6842.jpg?size=626&ext=jpg"
                src="https://previews.123rf.com/images/dvolkovkir1980/dvolkovkir19801805/dvolkovkir1980180500071/101914107-hotel-hotel-icon-five-star-hotel-on-a-white-background-flat-design-vector-illustration-vector.jpg"
              />
            </div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Signup to create an account
            </h2>
          </div>
          <Signup />
        </div>
      </div>
    </>
  );
}

export default SignupPage;
