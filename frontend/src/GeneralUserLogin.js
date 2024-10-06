import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './volunteer.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/loginUser`, {
        email,
        password,
      });
      
      // Handle successful login response
      setSuccessMessage('Login successful!');
      setEmail('');
      setPassword('');
      
      // Optional: store the token or user information in local storage or state
      // localStorage.setItem('authToken', response.data.token);

      // Remove success message after 1 second
      setTimeout(() => {
        setSuccessMessage('');
      }, 1000);

    } catch (error) {
      // Handle errors (e.g., incorrect email or password)
      if (error.response) {
        setErrorMessage(error.response.data.msg);
      } else {
        setErrorMessage('Server error, please try again later.');
      }

      // Remove error message after 3 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <div className="App">
      <div className="page-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;

