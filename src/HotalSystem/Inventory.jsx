import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../Url";
import axios from "axios";
import { toast } from "react-toastify";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Inventory() {
  const [inventory, setinventory] = useState([]);
  const [query, setQuery] = useState("");

  async function getinventory() {
    try {
      const res = await axios.get(`${BACKEND_URL}inventory`);
      if (res.data) {
        setinventory(res.data);
        console.log(res.data);
      }
    } catch (err) {
      toast.error(err);
    }
  }
  useEffect(() => {
    getinventory();
  }, []);
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BACKEND_URL}inventory/${id}`);
      toast.error(res?.data?.message);
      window.location.reload();
    } catch (e) {
      toast.error(`Cant delete`);
    }
  };
  return (
    <div className="flex flex-col p-5 m-5">
      <div className="overflow-x-auto">
        <div className="py-3 pl-2">
          <div className="relative max-w-xs">
            <label htmlFor="hs-table-search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              name="hs-table-search"
              id="hs-table-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
          <Link
            className="rounded my-9 text-white bg-blue-400 p-2 "
            to="/addinventory"
          >
            Add Inventory
          </Link>
          <div className=" my-3 overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="flex items-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Toiletries
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    linens
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Equipment
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Inventory Levels
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Status
                  </th>{" "}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inventory &&
                  inventory
                    ?.filter(
                      (employee) =>
                        employee.toiletries.toLowerCase().includes(query) ||
                        employee.equipment.toLowerCase().includes(query) ||
                        employee.status.toLowerCase().includes(query) ||
                        employee.inventorylevels
                          .toLowerCase()
                          .includes(query) ||
                        employee.linens.toLowerCase().includes(query)
                    )
                    ?.map((i) => (
                      <tr key={i._id}>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {i?.toiletries}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {i?.linens}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          {i?.equipment}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          {i?.inventorylevels}
                        </td>
                        <td className="px-6  py-4 text-sm font-medium text-right whitespace-nowrap">
                          {i?.status}
                        </td>
                        <td className="px-6  text-red-600 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <Link
                            className="cursor-pointer"
                            to={`/updatinventory/${i._id}`}
                          >
                            <AiFillEdit />
                          </Link>
                          <AiFillDelete
                            className="cursor-pointer"
                            onClick={() => handleDelete(i._id)}
                          />
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
