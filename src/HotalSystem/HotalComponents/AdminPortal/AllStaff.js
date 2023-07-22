import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../../../Url";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AllStaff = () => {
  // State variables
  const [staff, setStaff] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser?.role);

  async function getStaff() {
    const staffRes = await axios.get(`${BACKEND_URL}staff`);
    setStaff(staffRes?.data);
  }
  useEffect(() => {
    getStaff();
  }, []);

  const [roles, setRoles] = useState([
    "Front Desk",
    "Housekeeping",
    "Maintenance",
  ]);
  const [schedules, setSchedules] = useState(["Morning", "Evening", "Night"]);
  const [assignments, setAssignments] = useState([
    { id: 1, staffId: 1, role: "Front Desk", schedule: "Morning" },
    { id: 2, staffId: 2, role: "Housekeeping", schedule: "Evening" },
    { id: 3, staffId: 3, role: "Maintenance", schedule: "Night" },
  ]);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [assignedStaff, setAssignedStaff] = useState([]);

  const [newRole, setNewRole] = useState("");
  const handleAddRole = () => {
    if (newRole.trim() !== "") {
      setRoles([...roles, newRole]);
      setNewRole("");
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

  const [newSchedules, setNewSchedules] = useState("");
  const handleAddSchedules = () => {
    if (newSchedules.trim() !== "") {
      setSchedules([...schedules, newSchedules]);
      setNewSchedules("");
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
      setSelectedStaff("");
      setSelectedRole("");
      setSelectedSchedule("");
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

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [workschedule, setWorkSchedule] = useState("");
  async function postStaffData(data) {
    try {
      const res = await axios.post(`${BACKEND_URL}staff`, data);
      toast.success(res.data.message);
    } catch (error) {
      console.error("Error posting staff data:", error);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const staffData = {
      name,
      role,
      workschedule,
    };

    postStaffData(staffData);
  };
  async function handleDeleteClick(id) {
    console.log(id);
    try {
      const res = await axios.delete(`${BACKEND_URL}staff/${id}`);
      if (res.data) {
        toast(res.data.message);
        window.location.reload();
      }
    } catch (err) {
      toast(err);
    }
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Staff Management</h1>
      <div className="container mx-auto p-4">
        {currentUser?.role === "staff" && (
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block mb-2 font-medium">
                Role
              </label>
              <input
                type="text"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="workSchedule" className="block mb-2 font-medium">
                Work Schedule
              </label>
              <input
                type="text"
                id="workSchedule"
                value={workschedule}
                onChange={(e) => setWorkSchedule(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Staff
            </button>
          </form>
        )}
      </div>

      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <h2 className="text-lg font-bold mb-2">Staff List</h2>
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="border border-gray-500 px-4 py-2">Staff Name</th>
                <th className="border border-gray-500 px-4 py-2">Role</th>
                <th className="border border-gray-500 px-4 py-2">
                  Work Schedule
                </th>
                <th className="border border-gray-500 px-4 py-2">Manage</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((staf, index) => (
                <tr className="text-center" key={index}>
                  <td className="border border-gray-500 px-4 py-2">
                    {staf.name}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {staf.role}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {staf.workschedule}
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
    </div>
  );
};

export default AllStaff;
