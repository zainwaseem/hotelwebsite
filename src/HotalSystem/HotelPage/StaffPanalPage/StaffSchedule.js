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
    </div>
  );
};

export default StaffSchedule;
