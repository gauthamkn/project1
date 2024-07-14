import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [userType, setUserType] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === 'student') {
      navigate('/student-dashboard');
    } else {
      navigate('/teacher-dashboard');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="user-type-selector">
        <button
          type="button"
          className={`user-type-button ${userType === 'student' ? 'active' : ''}`}
          onClick={() => setUserType('student')}
        >
          Student
        </button>
        <button
          type="button"
          className={`user-type-button ${userType === 'teacher' ? 'active' : ''}`}
          onClick={() => setUserType('teacher')}
        >
          Teacher
        </button>
      </div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
