import React, { useState, useEffect } from 'react';

const staffData = [
    { id: 1, name: 'John Doe', role: 'Receptionist', availability: true },
    { id: 2, name: 'Jane Smith', role: 'Housekeeper', availability: false },
    // Add more staff members as needed
];

const scheduleData = [
    { id: 1, staffId: 1, date: '2023-06-21', shift: 'Morning' },
    { id: 2, staffId: 2, date: '2023-06-22', shift: 'Afternoon' },
    // Add more schedule data as needed
];

const assignmentData = [
    { id: 1, staffId: 1, task: 'Check-in guests' },
    { id: 2, staffId: 2, task: 'Clean room 101' },
    // Add more assignment data as needed
];


function StaffDuty() {
    const [staff, setStaff] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        // Fetch staff data from an API or use the provided JSON objects
        setStaff(staffData);
        setSchedules(scheduleData);
        setAssignments(assignmentData);
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">Staff Management System</h1>

            <div className="my-4">
                <h2 className="text-xl font-bold">Work Schedule</h2>
                <table className="border-collapse border">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Shift</th>
                            <th className="border px-4 py-2">Staff</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map(schedule => (
                            <tr key={schedule.id}>
                                <td className="border px-4 py-2">{schedule.date}</td>
                                <td className="border px-4 py-2">{schedule.shift}</td>
                                <td className="border px-4 py-2">
                                    {staff.find(member => member.id === schedule.staffId)?.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="my-4">
                <h2 className="text-xl font-bold">Assigned Tasks</h2>
                <ul className="list-disc pl-8">
                    {assignments.map(assignment => (
                        <li key={assignment.id}>{assignment.task}</li>
                    ))}
                </ul>
            </div>
            <div className="my-4">
                <h2 className="text-xl font-bold">Availability</h2>
                <table className="border-collapse border">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Staff</th>
                            <th className="border px-4 py-2">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staff.map(member => (
                            <tr key={member.id}>
                                <td className="border px-4 py-2">{member.name}</td>
                                <td className="border px-4 py-2">
                                    {member.availability ? 'Available' : 'Not Available'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );




}

export default StaffDuty