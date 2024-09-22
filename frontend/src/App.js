// App.js
/*import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Your CSS file

// Import the new components
import VolunteerLogin from './VolunteerLogin';
import VolunteerRegister from './VolunteerRegister';

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

// Volunteer Page Component with options for Login and Register
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

// General User Page
const GeneralUserPage = () => <h2>General User Page</h2>;

// Admin Page
const AdminPage = () => <h2>Admin Page</h2>;

// Organization Page
const OrganizationPage = () => <h2>Organization Page</h2>;

// App Component with Routing
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/general-user" element={<GeneralUserPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/volunteer/login" element={<VolunteerLogin />} />
          <Route path="/volunteer/register" element={<VolunteerRegister />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/organization" element={<OrganizationPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;*/



// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Your CSS file

// Import the new components
import VolunteerPage from './VolunteerPage'; // Import your VolunteerPage component
import VolunteerLogin from './VolunteerLogin';
import VolunteerRegister from './VolunteerRegister';

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

// General User Page
const GeneralUserPage = () => <h2>General User Page</h2>;

// Volunteer Page Component
const VolunteerPageComponent = () => <VolunteerPage />;

// Admin Page
const AdminPage = () => <h2>Admin Page</h2>;

// Organization Page
const OrganizationPage = () => <h2>Organization Page</h2>;

// App Component with Routing
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/general-user" element={<GeneralUserPage />} />
          <Route path="/volunteer" element={<VolunteerPageComponent />} />
          <Route path="/volunteer/login" element={<VolunteerLogin />} />
          <Route path="/volunteer/register" element={<VolunteerRegister />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/organization" element={<OrganizationPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

