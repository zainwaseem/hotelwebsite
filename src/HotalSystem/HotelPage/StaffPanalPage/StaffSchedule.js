import React, { useState, useEffect } from "react";
// import axios from 'axios';

const StaffSchedule = () => {
  const [staff, setStaff] = useState(["Jon"]);
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(Date);
  const [availability, setAvailability] = useState(false);
  const [assignedTasks, setAssignedTasks] = useState([
    { schedules: "asd", roles: "weww" },
  ]);

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Staff Management</h1> */}
      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex justify-center flex-wrap items-center sm:-mx-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Welcome to </span>
              <span className="block text-indigo-600 xl:inline">
                Staff Portal
              </span>
            </h1>
            <p className="mx-auto text-center text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
              A luxurious retreat offering exceptional accommodations,
              impeccable service, and memorable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Availability</h2>

                <div className=" items-center mb-2">
                    <span className="mr-2 block text-md font-bold">{date}</span>
                    <span className="mr-2  text-lg">Mark your Present </span>
                    <input
                        type="checkbox"
                        className="h-5 w-5 border border-gray-400 px-2 py-1 rounded"
                        value={availability}
                        onChange={() => setAvailability(!availability)}
                    />
                    <button
                        className="ml-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
                    // onClick={() => handleAvailabilityUpdate(member.id)}
                    >
                        Update
                    </button>
                </div>

            </div>
            <div>
                <h2 className="text-lg font-bold mb-2">Assigned Tasks</h2>
                <ul className="text-lg">
                    {assignedTasks.map((task) => (
                        <li key={task.id}>
                            <span>{staff} your today schedule is <strong><u>{task.schedules}</u></strong></span> <span> and roles  <strong><u> {task.roles}</u></strong></span>
                        </li>
                    ))}
                </ul>
            </div> */}
    </div>
  );
};

export default StaffSchedule;
