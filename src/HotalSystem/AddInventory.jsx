import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../Url";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function AddInventory() {
  const [toiletries, setToiletries] = useState();
  const [linens, setLinens] = useState();
  const [equipment, setequipment] = useState();
  const [inventorylevels, setinventorylevels] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  async function handleAdd(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}inventory`, {
        toiletries,
        linens,
        equipment,
        inventorylevels,
        status,
      });
      toast.success(res.data.message);
      setToiletries("");
      setLinens("");
      setinventorylevels("");
      setStatus("");
      setequipment("");
      navigate("/inventory");
    } catch (error) {
      console.error("Error posting staff data:", error);
    }
  }
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="Toiletries"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Toiletries
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="Toiletries"
                  onChange={(e) => setToiletries(e.target.value)}
                  className="block w-full outline-none mt-1 border-gray-500 rounded-md shadow-sm focus:ring-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="linens"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Linens
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  onChange={(e) => setLinens(e.target.value)}
                  name="linens"
                  className="block w-full mt-1 outline-none border-gray-500 rounded-md shadow-sm focus:ring-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="equipment"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                equipment
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  onChange={(e) => setequipment(e.target.value)}
                  name="equipment"
                  className="block w-full mt-1 outline-none border-gray-500 rounded-md shadow-sm focus:ring-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="inventorylevels"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                inventorylevels
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  onChange={(e) => setinventorylevels(e.target.value)}
                  name="inventorylevels"
                  className="block w-full mt-1 outline-none border-gray-500 rounded-md shadow-sm focus:ring-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>{" "}
            <div className="mt-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Status
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                  className="block w-full mt-1 outline-none border-gray-500 rounded-md shadow-sm focus:ring-indigo-600 focus:ring focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                onClick={handleAdd}
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
