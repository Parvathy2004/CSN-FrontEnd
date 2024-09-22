/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VolunteerPage = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleVolunteerClick = () => {
    setShowOptions(true);
  };

  return (
    <div className="page-container">
      <h2>Volunteer Page</h2>
      {!showOptions ? (
        <div>
          <p>Do you want to log in or register as a volunteer?</p>
          <button onClick={handleVolunteerClick}>Continue as Volunteer</button>
        </div>
      ) : (
        <div>
          <h3>Select an Option</h3>
          <Link to="/volunteer/login">
            <button>Login</button>
          </Link>
          <Link to="/volunteer/register">
            <button>Register</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default VolunteerPage;*/




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






