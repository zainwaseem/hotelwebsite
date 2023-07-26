import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../../Url";

function RoomCard({
  id,
  props,
  img,
  roomType,
  availability,
  price,
  occupancyStatus,
}) {
  const handleBooking = async (id) => {
    console.log(img, roomType);
    const bookres = await axios.patch(`${BACKEND_URL}rooms/${id}`, {
      availability: `Booked`,
    });
    console.log(bookres.data.message);

    // const roomID = id;
    // window.location.href = `/RoomBooking?id=${roomID}`;
  };
  async function handleDeleteRoom(e) {
    e.preventDefault();
    try {
      const res = await axios.delete(`${BACKEND_URL}rooms/${id}`);
      if (res.data) {
        toast(res.data.message);
        window.location.reload();
      }
    } catch (err) {
      toast(err);
    }
  }
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img
            src={img}
            alt=""
            className="border-radius-2 h-64 ml-auto mr-auto"
          />
        </figure>
        <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div className="h-40 ">
            <h5 className="text-white text-2xl font-bold leading-none">
              {roomType}
            </h5>
            <span className="text-xs text-gray-100 leading-none d-block">
              {availability}
            </span>
            <br />
            <span className="text-xs text-gray-100 leading-none d-block">
              {occupancyStatus}
            </span>
            <br />
          </div>
          <div className="flex items-center">
            <div className="text-4xl text-white font-light">{price}€</div>
            {props === "guest" && (
              <Link
                to="#"
                onClick={() => handleBooking(id)}
                className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-current m-auto"
                >
                  <>
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </>
                </svg>
              </Link>
            )}
            {props === "admin" && (
              <>
                <button
                  onClick={handleDeleteRoom}
                  className="pl-2 pt-2 bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-14 h-10 flex ml-2 transition duration-300"
                >
                  Delete
                </button>
              </>
            )}
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
