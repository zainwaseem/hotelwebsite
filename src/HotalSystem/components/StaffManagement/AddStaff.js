
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

function AddStaff() {

    const [staff, setStaff] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [newStaffName, setNewStaffName] = useState('');
    const [newStaffRole, setNewStaffRole] = useState('');
    const [editStaffId, setEditStaffId] = useState(null);
    const [editStaffName, setEditStaffName] = useState('');
    const [editStaffRole, setEditStaffRole] = useState('');

    useEffect(() => {
        // Fetch staff data from an API or use the provided JSON objects
        setStaff(staffData);
        setSchedules(scheduleData);
        setAssignments(assignmentData);
    }, []);

    const handleAddStaff = () => {
        const newStaffId = staff.length + 1;
        const newStaffMember = {
            id: newStaffId,
            name: newStaffName,
            role: newStaffRole,
            availability: true,
        };

        setStaff([...staff, newStaffMember]);
        setNewStaffName('');
        setNewStaffRole('');
    };

    const handleEditStaff = (staffId) => {
        const staffMember = staff.find((member) => member.id === staffId);
        setEditStaffId(staffId);
        setEditStaffName(staffMember.name);
        setEditStaffRole(staffMember.role);
    };

    const handleUpdateStaff = () => {
        const updatedStaff = staff.map((member) =>
            member.id === editStaffId
                ? { ...member, name: editStaffName, role: editStaffRole }
                : member
        );

        setStaff(updatedStaff);
        setEditStaffId(null);
        setEditStaffName('');
        setEditStaffRole('');
    };

    const handleDeleteStaff = (staffId) => {
        const updatedStaff = staff.filter((member) => member.id !== staffId);
        setStaff(updatedStaff);
    };

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
                        {schedules.map((schedule) => (
                            <tr key={schedule.id}>
                                <td className="border px-4 py-2">{schedule.date}</td>
                                <td className="border px-4 py-2">{schedule.shift}</td>
                                <td className="border px-4 py-2">
                                    {staff.find((member) => member.id === schedule.staffId)?.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="my-4">
                <h2 className="text-xl font-bold">Assigned Tasks</h2>
                <ul className="list-disc pl-8">
                    {assignments.map((assignment) => (
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
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staff.map((member) => (
                            <tr key={member.id}>
                                <td className="border px-4 py-2">{member.name}</td>
                                <td className="border px-4 py-2">
                                    {member.availability ? 'Available' : 'Not Available'}
                                </td>
                                <td className="border px-4 py-2">
                                    {editStaffId === member.id ? (
                                        <>
                                            <button
                                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                                onClick={handleUpdateStaff}
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="bg-red-500 text-white px-4 py-2 rounded"
                                                onClick={() => {
                                                    setEditStaffId(null);
                                                    setEditStaffName('');
                                                    setEditStaffRole('');
                                                }}
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                                onClick={() => handleEditStaff(member.id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-500 text-white px-4 py-2 rounded"
                                                onClick={() => handleDeleteStaff(member.id)}
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="my-4">
                <h2 className="text-xl font-bold">Add New Staff</h2>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border rounded px-4 py-2 mr-2"
                        value={newStaffName}
                        onChange={(e) => setNewStaffName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Role"
                        className="border rounded px-4 py-2 mr-2"
                        value={newStaffRole}
                        onChange={(e) => setNewStaffRole(e.target.value)}
                    />
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        onClick={handleAddStaff}
                    >
                        Add Staff
                    </button>
                </div>
            </div>
        </div>
    );

}

export default AddStaff