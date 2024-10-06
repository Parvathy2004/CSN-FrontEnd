// VolunteerPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './volunteer.css'; // Make sure to import the CSS file if needed

const VolunteerPage = () => {
  return (
    <div className="volunteer-container">
      <h2>Volunteer Portal</h2>
      <p>Please choose an option:</p>
      <div className="button-container">
        <Link to="/volunteer/login">
          <button>Login</button>
        </Link>
        <Link to="/volunteer/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerPage;






