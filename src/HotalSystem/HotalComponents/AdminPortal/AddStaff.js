import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../../Url";
import { toast } from "react-toastify";
import axios from "axios";
const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";
const fields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
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

function AddStaff() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const [signupState, setSignupState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignupState({ ...signupState, role });
    console.log(signupState);
    createAccount();
  };

  const createAccount = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}register`, signupState);
      if (res.data) {
        if (res.status !== 200) {
          return toast(res.data.message);
        }
        if (res.status === 200) {
          toast(res.data.message);
          navigate("/users");
        }
      }
    } catch (error) {
      toast.error(`Something went Wrong` + error.message);
    }
  };
  return (
    <form className="mt-8 space-y-6">
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="userType"
        >
          User Type:
        </label>
        <select
          id="userType"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="" disabled>
            Select User Type
          </option>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="">
        {fields.map((field) => (
          <div className="my-5">
            <label htmlFor={field.labelFor} className="sr-only">
              {field.labelText}
            </label>
            <input
              onChange={handleChange}
              value={field.value}
              id={field.id}
              name={field.name}
              type={field.type}
              required={field.isRequired}
              className={fixedInputClass}
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <Link>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Link>
      </div>
    </form>
  );
}

export default AddStaff;
