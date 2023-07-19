import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../Url";
import axios from "axios";
import { toast } from "react-toastify";

function FeedbackReport() {
  const [users, setusers] = useState([
    // { guestName: "jon", rating: 3, description: "here is all discription" },
    // { guestName: "jon", rating: 3, description: "here is all discription" },
    // { guestName: "jon", rating: 3, description: "here is all discription" },
  ]);

  async function getfeedbacks() {
    const feedbacksRes = await axios.get(`${BACKEND_URL}feedback`);
    setusers(feedbacksRes?.data);
  }

  useEffect(() => {
    getfeedbacks();
  }, []);

  const handleDelete = async (id) => {
    if (id) {
      const res = await axios.delete(`${BACKEND_URL}feedback/${id}`);
      toast.error(res?.data?.message);
      window.location.reload();
    } else {
      toast.error(`Cant delete`);
    }
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Guest Feedbacks</h1>

      {users &&
        users.map((item, index) => {
          return (
            <div key={index} className="container mx-auto h-full p-4 border-2">
              {/* <h1 className="text-2xl uppercase font-bold ">
                {index + 1} {""}
                {item.guestName}
              </h1> */}

              <div className="h-10  mb-1 items-center">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 float-right  text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <h1 className="text-md font-bold mr-5">
                  Rating points ({item.rating})
                </h1>
              </div>
              <p
                className="border w-100 border-gray-300 p-2 rounded mb-4"
                // rows="4"
                // placeholder="Write a description..."
              >
                {item.description}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default FeedbackReport;
