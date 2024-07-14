
import React from 'react';
import { Link } from 'react-router-dom';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/create-course">Create/Edit Courses</Link></li>
          <li><Link to="/upload-materials">Upload Course Materials</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default TeacherDashboard;