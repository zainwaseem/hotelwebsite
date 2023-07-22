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
  );
}

export default Rooms;
