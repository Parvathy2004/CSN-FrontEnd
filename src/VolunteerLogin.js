import React, { useState } from 'react';
import './volunteer.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    // On successful login:
    setSuccessMessage('Login successful!');
    setEmail('');
    setPassword('');
    
    setTimeout(() => {
      setSuccessMessage('');
    }, 1000); // Message disappears after 1 seconds
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
      </div>
    </div>
  );
};

export default Login;
