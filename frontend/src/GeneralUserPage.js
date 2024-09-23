
import React from 'react';
import { Link } from 'react-router-dom';
import './volunteer.css'; // Make sure to import the CSS file if needed

const GeneralUserPage = () => {
  return (
    <div className="Organization-container">
      <h2>GeneralUser Portal</h2>
      <p>Please choose an option:</p>
      <div className="button-container">
        <Link to="/generaluser/login">
          <button>Login</button>
        </Link>
        <Link to="/generaluser/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default GeneralUserPage;