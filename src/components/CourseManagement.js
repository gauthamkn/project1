import React, { useState } from 'react';
import './CourseManagement.css'; 

const CourseManagement = () => {
  const [courseName, setCourseName] = useState('');

  const handleCreateCourse = () => {
    // Logic to create/edit course
    alert(`Course ${courseName} created/edited!`);
  };

  return (
    <div>
      <h2>Create/Edit Course</h2>
      <input
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <button onClick={handleCreateCourse}>Submit</button>
    </div>
  );
};

export default CourseManagement;