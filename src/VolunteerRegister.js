import React, { useState } from 'react';
import './volunteer.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [age, setAge] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    // On successful registration:
    setSuccessMessage('Registration successful!');
    setName('');
    setEmail('');
    setPassword('');
    setAddress('');
    setContactNumber('');
    setAge('');

    setTimeout(() => {
      setSuccessMessage('');
    }, 1000); // Message disappears after 3 seconds
  };

  return (
    <div className="App">
      <div className="page-container">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
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
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </div>
  );
};

export default Registration;
