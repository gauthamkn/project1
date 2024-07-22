import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import CourseManagement from './components/CourseManagement';
import UploadMaterials from './components/UploadMaterials';
import DocumentsDashboard from './components/DocumentsDashboard';
import Navbar from './components/navbar';
import Navbar from './components/sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact  path="/" Component={Login} />
          <Route path="/dashboard" Component={DocumentsDashboard} />
          <Route path="/student-dashboard" Component={StudentDashboard} />
          <Route path="/teacher-dashboard" Component={TeacherDashboard} />
          <Route path="/create-course" Component={CourseManagement} />
          <Route path="/upload-materials" Component={UploadMaterials} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;