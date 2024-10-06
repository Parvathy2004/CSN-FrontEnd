import React, { useState } from 'react';
import axios from 'axios';
import './volunteer.css';

const OrganizationRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/organization/registerOrganization`, {
        name,
        email,
        password,
        address,
        contactNumber,
      });      
      setSuccessMessage(response.data.message);
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setAddress('');
      setContactNumber('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.msg);
      } else {
        setErrorMessage('Server error in sending');
      }
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <div className="App">
      <div className="page-container">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name of Organization"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default OrganizationRegistration;
