import React, { useState } from "react";
import { BACKEND_URL } from "../../../Url";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const roomArray = [
  {
    // roomType: '',
    // availability: '',
    // price: '',
    // occupancyStatus: '',
  },
];
const AddRoom = () => {
  // const [selectedImage, setSelectedImage] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [availability, setAvailability] = useState("Available");
  const [price, setPrice] = useState("");
  const [occupancyStatus, setOccupancyStatus] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [img, setImg] = useState(``);
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedImage(URL.createObjectURL(file));
  //   console.log(
  //     "🚀 ~ file: AddRoom.js:24 ~ handleImageUpload ~ URL.createObjectURL(file):",
  //     URL.createObjectURL(file)
  //   );
  // };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}rooms`, {
        // selectedImage,
        img,
        roomType,
        availability,
        price,
        occupancyStatus,
      });
      console.log(res.data);
      if (res.data) {
        toast(res.data.message);
        setRoomType("");
        setAvailability("");
        setPrice("");
        setOccupancyStatus("");
        setOccupancyStatus(null);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
        // navigate("/rooms");
      }
    } catch (err) {
      toast(err);
    }
  };

  return (
    <div>
      {showToast && (
        <div className="bg-green-500 text-white text-center py-2 px-4 mb-4">
          Room data submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Image:
          </label>

          <input
            type="file"
            accept="image/*"
            // onChange={handleImageUpload}
            onChange={(e) => {
              let reader = new FileReader();
              reader.onload = () => {
                if (reader.readyState === 2) {
                  setImg(reader.result);
                }
              };
              reader.readAsDataURL(e.target.files[0]);
            }}
            id="image"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          {img && (
            <div>
              <img src={img} alt="Selected" className="rounded-lg" />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="roomType"
          >
            Room Type:
          </label>
          <input
            type="text"
            id="roomType"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="availability"
          >
            Availability:
          </label>

          <select
            // type="text"
            id="availability"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          >
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price:
          </label>
          <input
            type="text"
            id="price"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="occupancyStatus"
          >
            Occupancy Status:
          </label>
          <input
            type="text"
            id="occupancyStatus"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={occupancyStatus}
            onChange={(e) => setOccupancyStatus(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;
