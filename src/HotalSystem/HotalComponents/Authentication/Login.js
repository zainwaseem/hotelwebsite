import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../../redux/userSlice";
import { BACKEND_URL } from "../../../Url";
import { toast } from "react-toastify";
import axios from "axios";
const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

const fields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userType, setUserType] = useState("");
  const [loginState, setLoginState] = useState();
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = async () => {
    dispatch(loginStart());
    try {
      const res = await axios.post(`${BACKEND_URL}login`, loginState);
      console.log(res.data.user.role);

      dispatch(loginSuccess(res.data.user));

      toast(res.data.token);
      navigate(`/${res.data.user.role}`);
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <div key={field.id} className="my-5">
            <label htmlFor={field.labelFor} className="sr-only">
              {field.labelText}
            </label>
            <input
              onChange={handleChange}
              id={field.id}
              name={field.name}
              type={field.type}
              required={field.isRequired}
              className={fixedInputClass}
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm"></div>
      </div>

      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
        onSubmit={handleSubmit}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
