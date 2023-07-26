import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../../Url";
import { useSelector } from "react-redux";

function GuestFeedback() {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [enabled, setEnabled] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  async function handleFeedbackClick() {
    setEnabled(true);
    try {
      const res = await axios.post(`${BACKEND_URL}feedback`, {
        description,
        rating,
      });
      if (res.data.message) {
        toast.info(res.data.message);
      }
      setRating("");
      setDescription("");
    } catch (err) {
      toast.error(err);
    }
    setEnabled(false);
  }
  const [feedbacks, setfeedbacks] = useState();
  async function getFeedback() {
    try {
      const res = await axios.get(`${BACKEND_URL}feedback`);
      if (res.data) {
        setfeedbacks(res.data);
      }
    } catch (err) {
      toast.error(err);
    }
  }
  useEffect(() => {
    getFeedback();
  }, []);

  async function handleDeleteClick(id) {
    console.log(id);
    try {
      const res = await axios.delete(`${BACKEND_URL}feedback/${id}`);
      if (res.data) {
        toast(res.data.message);
        window.location.reload();
      }
    } catch (err) {
      toast(err);
    }
  }
  return (
    <div className="container mx-auto p-4">
      {currentUser?.role === "guest" ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Feedback</h1>
          <div className="flex items-center mb-4">
            <h1 className="text-md font-bold mr-5">Rating</h1>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                onClick={() => handleStarClick(index)}
                className={`h-6 w-6 fill-current ${
                  index < rating ? "text-yellow-500" : "text-gray-400"
                } cursor-pointer`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1.702l2.581 5.27 5.793.84-4.184 4.07.988 5.742L10 14.83l-5.178 2.794.988-5.742L1.62 7.812 7.412 6.97 10 1.702zm0 2.274l-2.186 4.458-4.904.712 3.545 3.457-.837 4.874L10 15.29l4.482 2.42-.837-4.874 3.545-3.457-4.904-.712L10 3.976z"
                />
              </svg>
            ))}
          </div>
          <textarea
            className="border w-100 border-gray-300 p-2 rounded mb-4"
            rows="4"
            placeholder="Write a description..."
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
          {enabled ? (
            <button
              disabled
              className="bg-blue-500 block text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Loading...
            </button>
          ) : (
            <button
              className="bg-blue-500 block text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleFeedbackClick}
            >
              Submit Feedback
            </button>
          )}
        </div>
      ) : (
        <div className="container mx-auto p-4">
          <div className="overflow-x-auto">
            <h2 className="text-lg font-bold mb-2">Feedbacks</h2>
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="border border-gray-500 px-4 py-2">Stars</th>
                  <th className="border border-gray-500 px-4 py-2">Message</th>
                  <th className="border border-gray-500 px-4 py-2">Manage</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks &&
                  feedbacks?.map((staf, index) => (
                    <tr className="text-center" key={index}>
                      <td className="border border-gray-500 px-4 py-2">
                        {staf.rating}
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        {staf.description}
                      </td>
                      <td
                        className="border text-red-400 font-bold cursor-pointer border-gray-500 px-4 py-2"
                        onClick={() => handleDeleteClick(staf._id)}
                      >
                        Delete
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default GuestFeedback;
