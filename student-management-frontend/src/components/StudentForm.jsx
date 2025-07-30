import React, { useState } from 'react';
import axios from 'axios';


export default function StudentForm() {
  const [student, setStudent] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/students', student);
    setStudent({ name: '', email: '', age: '' });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={student.email} onChange={handleChange} placeholder="Email" />
      <input name="age" value={student.age} onChange={handleChange} placeholder="Age" type="number" required />
      <button type="submit">Add Student</button>
    </form>
  );
}
