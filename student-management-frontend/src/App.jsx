import { Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeveloperInfo from './components/DeveloperInfo';


export default function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Student Management System</h1>
      
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
      <DeveloperInfo/>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}
