import React, { useEffect, useState } from "react";
import RoomCard from "../HotelCards/RoomCard";
import axios from "axios";
import { BACKEND_URL } from "../../../Url";
import { useSelector } from "react-redux";

function AvalibleRoom() {
  const [rooms, setRooms] = useState([]);
  const availableRooms =
    rooms && rooms.filter((room) => room.availability === "Available");

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
      <div
        className="flex items-center bg-white w-screen min-h-screen"
        style={{ fontFamily: "Muli" }}
      >
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          {availableRooms.map((room, index) => (
            <RoomCard
              key={index}
              id={room._id}
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

export default AvalibleRoom;
