import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import CourseManagement from './components/CourseManagement';
import UploadMaterials from './components/UploadMaterials';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route exact  path="/" Component={Login} />
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