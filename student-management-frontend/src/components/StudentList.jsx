// components/StudentList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

 const handleDelete = (id) => {
  fetch(`http://localhost:8080/students/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete");
      }
      // Update the state
      setStudents(students.filter((s) => s.id !== id));
      // Show success toast
      toast.success("Student deleted successfully!");
    })
    .catch((error) => {
      // Show error toast
      toast.error("Error deleting student.");
      console.error(error);
    });
};

  return (
    <div className="overflow-x-auto">
      <button 
        onClick={() => navigate("/add")} 
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Student
      </button>
      <table className="table-auto w-full border border-gray-300">
        <thead>
    <tr className="bg-blue-100 text-left">
      <th className="py-4 px-6">ID</th>
      <th className="py-4 px-6">Name</th>
      <th className="py-4 px-6">Age</th>
      <th className="py-4 px-6">Email</th>
      <th className="py-4 px-6">Actions</th>
    </tr>
  </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="p-3 border">{student.id}</td>
              <td className="p-3 border">{student.name}</td>
              <td className="p-3 border">{student.email}</td>
              <td className="p-3 border">{student.age}</td>
              <td className="p-3 border space-x-2">
                <button 
                  onClick={() => navigate(`/edit/${student.id}`)} 
                  className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(student.id)} 
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
