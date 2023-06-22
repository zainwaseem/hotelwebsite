import React, { useState } from 'react';

const AllStaff = () => {
    // State variables
    const [staff, setStaff] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Mike Johnson' },
    ]);
    const [roles, setRoles] = useState(['Front Desk', 'Housekeeping', 'Maintenance']);
    const [schedules, setSchedules] = useState(['Morning', 'Evening', 'Night']);
    const [assignments, setAssignments] = useState([
        { id: 1, staffId: 1, role: 'Front Desk', schedule: 'Morning' },
        { id: 2, staffId: 2, role: 'Housekeeping', schedule: 'Evening' },
        { id: 3, staffId: 3, role: 'Maintenance', schedule: 'Night' },
    ]);
    const [selectedStaff, setSelectedStaff] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedSchedule, setSelectedSchedule] = useState('');
    const [assignedStaff, setAssignedStaff] = useState([]);

    const [newRole, setNewRole] = useState('');
    const handleAddRole = () => {
        if (newRole.trim() !== '') {
            setRoles([...roles, newRole]);
            setNewRole('');
        }
    };
    const handleModifyRole = (index, newValue) => {
        const updatedRoles = [...roles];
        updatedRoles[index] = newValue;
        setRoles(updatedRoles);
    };
    const handleDeleteRole = (index) => {
        const updatedRoles = roles.filter((_, i) => i !== index);
        setRoles(updatedRoles);
    };
    const handleEditRole = (index, newValue) => {
        const updatedRoles = [...roles];
        updatedRoles[index] = newValue;
        setRoles(updatedRoles);
    };

    const [newSchedules, setNewSchedules] = useState('');
    const handleAddSchedules = () => {
        if (newSchedules.trim() !== '') {
            setSchedules([...schedules, newSchedules]);
            setNewSchedules('');
        }
    };
    const handleModifySchedules = (index, newValue) => {
        const updatedSchedules = [...schedules];
        updatedSchedules[index] = newValue;
        setSchedules(updatedSchedules);
    };
    const handleDeleteSchedules = (index) => {
        const updatedSchedules = schedules.filter((_, i) => i !== index);
        setSchedules(updatedSchedules);
    };
    const handleEditSchedules = (index, newValue) => {
        const updatedSchedules = [...schedules];
        updatedSchedules[index] = newValue;
        setSchedules(updatedSchedules);
    };

    // Function to handle adding a staff assignment
    const handleAddStaffAssignment = () => {
        if (selectedStaff && selectedRole && selectedSchedule) {
            const newAssignment = {
                staffName: selectedStaff,
                role: selectedRole,
                schedule: selectedSchedule,
            };
            setAssignedStaff([...assignedStaff, newAssignment]);
            setSelectedStaff('');
            setSelectedRole('');
            setSelectedSchedule('');
        }
    };

    // Function to handle deleting a staff assignment
    const handleDeleteStaffAssignment = (index) => {
        const updatedAssignments = assignedStaff.filter((_, i) => i !== index);
        setAssignedStaff(updatedAssignments);
    };

    // Function to handle editing a staff assignment
    const handleEditStaffAssignment = (index) => {
        const assignmentToEdit = assignedStaff[index];
        setSelectedStaff(assignmentToEdit.staffId);
        setSelectedRole(assignmentToEdit.role);
        setSelectedSchedule(assignmentToEdit.schedule);
        handleDeleteStaffAssignment(index);
    };
    // Functions to manage staff data, roles, schedules, and assignments

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Staff Management</h1>

            {/* Display staff list */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
                <h2 className="text-lg font-bold mb-2">Staff List</h2>
                <ul>
                    {staff.map((staffMember) => (
                        <li key={staffMember.id}>
                            {staffMember.id} - {staffMember.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Display roles */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
                <h2 className="text-lg font-bold mb-2">Roles</h2>
                <ul>
                    {roles.map((role, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <p
                                // type="text"
                                // value={role}
                                // id='editrole'
                                // onChange={(e) => handleModifyRole(index, e.target.value)}
                                className="mr-2 w-60"
                            >
                                {role}

                            </p>
                            <button
                                onClick={() => handleDeleteRole(index)}
                                className="px-4 py-2 text-white bg-red-500 rounded"
                            >
                                Delete
                            </button>
                            <button
                                for='editrole   '
                                onClick={() => {
                                    const newRoleValue = prompt('change role :', role);
                                    if (newRoleValue !== null) {
                                        handleEditRole(index, newRoleValue);
                                    }
                                }}
                                className="ml-2 px-4 py-2 text-white bg-blue-500 rounded"
                            >
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end">
                    <input
                        type="text"
                        value={newRole}
                        placeholder='Enter new role '
                        onChange={(e) => setNewRole(e.target.value)}
                        className="border-2 pl-1 rounded-md mr-2"
                    />
                    <button onClick={handleAddRole} className="px-4 py-2 text-white bg-green-500 rounded">
                        Add
                    </button>
                </div>
            </div>


            {/* Display schedules */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
                <h2 className="text-lg font-bold mb-2">Schedules</h2>
                <ul>
                    {schedules.map((schedule, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <p
                                className="mr-2 w-60"
                            >
                                {schedule}</p>
                            <button
                                onClick={() => handleDeleteSchedules(index)}
                                className="px-4 py-2 text-white bg-red-500 rounded"
                            >
                                Delete
                            </button>
                            <button
                                for='editrole   '
                                onClick={() => {
                                    const newRoleValue = prompt('change role :', schedule);
                                    if (newRoleValue !== null) {
                                        handleEditRole(index, newRoleValue);
                                    }
                                }}
                                className="ml-2 px-4 py-2 text-white bg-blue-500 rounded"
                            >
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end">
                    <input
                        type="text"
                        value={newSchedules}
                        placeholder='Enter new Schedules '
                        onChange={(e) => setNewSchedules(e.target.value)}
                        className="border-2 pl-1 rounded-md mr-2"
                    />
                    <button onClick={handleAddSchedules} className="px-4 py-2 text-white bg-green-500 rounded">
                        Add
                    </button>
                </div>
            </div>

            {/* Display staff assignments */}
            <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-bold mb-2">Assigned Staff</h2>
                <div className="mb-4 sm:flex sm:flex-row ">
                    <select

                        value={selectedStaff}
                        onChange={(e) => setSelectedStaff(e.target.value)}
                        className="mr-2 border-2 rounded-md"
                    >
                        <option value="" disabled>Select Staff</option>
                        {staff.map((staffMember) => (
                            <option key={staffMember.id} value={staffMember.name}>
                                {staffMember.name}
                            </option>
                        ))}
                    </select>
                    <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="mr-2 border-2 rounded-md"
                    >
                        <option value="" disabled>Select Role</option>
                        {roles.map((role) => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                        ))}
                    </select>
                    <select
                        value={selectedSchedule}
                        onChange={(e) => setSelectedSchedule(e.target.value)}
                        className="mr-2 border-2 rounded-md"
                    >
                        <option value="" disabled>Select Schedule</option>
                        {schedules.map((schedule) => (
                            <option key={schedule} value={schedule}>
                                {schedule}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleAddStaffAssignment} className="px-4 py-2 text-white bg-green-500 rounded">
                        Add
                    </button>
                </div>
                <ul>
                    {assignedStaff.map((assignment, index) => (
                        <li key={index} className="flex flex-col sm:flex-row  mb-2">
                            <div className='w-2/5'>
                                <span>{assignment.staffName}</span>
                                <span className="mx-2">-</span>
                                <span>{assignment.role}</span>
                                <span className="mx-2">-</span>
                                <span>{assignment.schedule}</span>
                            </div>
                            <div >
                                <button onClick={() => handleDeleteStaffAssignment(index)} className="px-4 py-2 text-white bg-red-500 rounded mx-2">
                                    Delete
                                </button>
                                <button onClick={() => handleEditStaffAssignment(index)} className="px-4 py-2 text-white bg-blue-500 rounded mx-2">
                                    Edit
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

};


export default AllStaff