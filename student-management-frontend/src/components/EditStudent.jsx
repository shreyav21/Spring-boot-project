// components/EditStudent.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function EditStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState({ name: "", age: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/students/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  fetch(`http://localhost:8080/students/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to update student");
      }
      toast.success("Student updated successfully!");
      navigate("/");
    })
    .catch((err) => {
      console.error(err);
      toast.error("Update failed. Please try again.");
    });
};

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input 
        type="text" 
        name="name" 
        value={student.name} 
        onChange={handleChange} 
        placeholder="Name"
        className="w-full p-2 border rounded" 
      />
      <input 
        type="number" 
        name="age" 
        value={student.age} 
        onChange={handleChange} 
        placeholder="Age"
        className="w-full p-2 border rounded" 
      />
      <input 
        type="email" 
        name="email" 
        value={student.email} 
        onChange={handleChange} 
        placeholder="Email"
        className="w-full p-2 border rounded" 
      />
      <button 
        type="submit" 
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Update
      </button>
    </form>
  );
}
