
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Your CSS file

// Import the new components
import VolunteerPage from './VolunteerPage'; // Import your VolunteerPage component
import VolunteerLogin from './VolunteerLogin';
import VolunteerRegister from './VolunteerRegister';
import OrganizationPage from './OrganizationPage';
import OrganizationLogin from './OrganizationLogin';
import OrganizationRegister from './OrganizationRegister';
import GeneralUserPage from './GeneralUserPage';
import GeneralUserLogin from './GeneralUserLogin';
import GeneralUserRegister from './GeneralUserRegister';
import AdminPage from './AdminPage';


// Home Page Component
const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Community Support Network</h1>
      <div className="button-container">
        <Link to="/general-user">
          <button>General User</button>
        </Link>
        <Link to="/volunteer">
          <button>Volunteer</button>
        </Link>
        <Link to="/admin">
          <button>Admin</button>
        </Link>
        <Link to="/organization">
          <button>Organization</button>
        </Link>
      </div>
    </div>
  );
};

// Organization Page

// App Component with Routing
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/general-user" element={<GeneralUserPage/>} />
          <Route path="/volunteer" element={<VolunteerPage/>} />
          <Route path="/volunteer/login" element={<VolunteerLogin/>} />
          <Route path="/volunteer/register" element={<VolunteerRegister />} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/Organization" element={<OrganizationPage />} />
          <Route path="/Organization/login" element={<OrganizationLogin />} />
          <Route path="/Organization/register" element={<OrganizationRegister/>} />
          <Route path="/generaluser/login" element={<GeneralUserLogin />} />
          <Route path="/generaluser/register" element={<GeneralUserRegister />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

