import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const StaffSchedule = () => {
    const [staff, setStaff] = useState(['Jon']);
    const [schedule, setSchedule] = useState([]);
    const [date, setDate] = useState(Date)
    const [availability, setAvailability] = useState(false);
    const [assignedTasks, setAssignedTasks] = useState([{ schedules: 'asd', roles: 'weww' }]);


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Staff Management</h1>



            <div className="mb-4">
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
            </div>


        </div>
    );
};



export default StaffSchedule