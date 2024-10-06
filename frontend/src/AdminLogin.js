// AdminLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './volunteer.css'; // Import your CSS for styling

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [adminId, setAdminId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/loginAdmin`, {
        email,
        adminId,
      });

      // Handle successful login response
      setSuccessMessage('Login successful!');
      setEmail('');
      setAdminId('');

      // Redirect to admin dashboard using navigate
      setTimeout(() => {
        navigate('/admin/dashboard'); // Change to your actual admin dashboard route
      }, 1000);

    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.msg);
      } else {
        setErrorMessage('Server error, please try again later.');
      }
      
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <div className="App">
      <div className="page-container">
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default AdminLogin;
