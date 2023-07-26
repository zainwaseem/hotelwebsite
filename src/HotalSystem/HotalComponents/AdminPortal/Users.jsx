import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../../../Url";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  async function getrooms() {
    const usersRes = await axios.get(`${BACKEND_URL}users`);
    setUsers(usersRes?.data);
  }

  useEffect(() => {
    getrooms();
  }, []);
  async function handleDelete(id) {
    const deleted = await axios.delete(`${BACKEND_URL}users/${id}`);
    console.log(deleted?.data.mesage);
    window.location.reload();
  }
  return (
    <>
      <Link
        to="/createusers"
        className="px-4 py-2 m-4  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Account
      </Link>
      <div className="flex m-7 shadow-lg flex-wrap sm:flex-row flex-col">
        {users &&
          users?.map((user) => (
            <div className="w-80 mx-12 drop-shadow-lg">
              <div className="rounded-t-lg h-32 overflow-hidden">
                <img
                  className="object-cover object-top w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYeYwNKcspJ379S0hcXfen3OlGFZsqYrrVA&usqp=CAU"
                  alt="hotel"
                />
              </div>
              <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  className="object-cover object-center h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrpap4ogmUL6nwYZzr6qCL6rv7kdTEVfenrfayYE&s"
                  alt="men front"
                />
              </div>
              <div className="text-center mt-2 drop-shadow-lg">
                <h2 className="font-semibold">{user.username}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
   
              <div className="p-4 border-t mx-8 mt-2">
                <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-1">
                  {user.role}
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="w-1/2 block mx-auto rounded-full bg-red-400 hover:shadow-lg font-semibold text-white px-4 py-1 m-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Users;
