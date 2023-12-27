// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration Form</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
