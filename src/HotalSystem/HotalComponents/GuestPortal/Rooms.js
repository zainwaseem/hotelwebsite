import React, { useEffect, useState } from "react";
import RoomCard from "../HotelCards/RoomCard";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "../../../Url";
import axios from "axios";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  const { currentUser } = useSelector((state) => state.user);

  async function getrooms() {
    const feedbacksRes = await axios.get(`${BACKEND_URL}rooms`);
    setRooms(feedbacksRes?.data);
    console.log(feedbacksRes?.data);
  }

  useEffect(() => {
    getrooms();
  }, []);

  return (
    <>
      {currentUser.role === `guest` && (
        <section className="px-2 py-32 bg-white md:px-0">
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex justify-center flex-wrap items-center sm:-mx-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Welcome to </span>
                <span className="block text-indigo-600 xl:inline">
                  {currentUser.role} Portal
                </span>
              </h1>
              <p className="mx-auto text-center text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                A luxurious retreat offering exceptional accommodations,
                impeccable service, and memorable experiences.
              </p>
            </div>
          </div>
        </section>
      )}
      <div
        className="flex items-center bg-white w-screen min-h-screen"
        style={{ fontFamily: "Muli" }}
      >
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          {rooms.map((room, index) => (
            <RoomCard
              id={room?._id}
              img={room?.img?.secure_url}
              roomType={room?.roomType}
              availability={room?.availability}
              price={room?.price}
              occupancyStatus={room?.occupancyStatus}
              props={currentUser?.role}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Rooms;
