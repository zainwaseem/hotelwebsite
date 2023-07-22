import React, { useEffect, useState } from "react";
// import { rooms } from "../Data/RoomData";
import RoomCard from "../HotelCards/RoomCard";
import axios from "axios";
import { BACKEND_URL } from "../../../Url";

function BookedRoom() {
  const [rooms, setRooms] = useState([]);

  async function getrooms() {
    const feedbacksRes = await axios.get(`${BACKEND_URL}rooms`);
    setRooms(feedbacksRes?.data);
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
          {rooms.map(
            (room, index) =>
              room.availability === "Booked" && (
                <RoomCard
                  key={index}
                  img={room?.img.secure_url}
                  roomType={room?.roomType}
                  availability={room?.availability}
                  price={room?.price}
                  occupancyStatus={room?.occupancyStatus}
                  props="Guest"
                />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default BookedRoom;
