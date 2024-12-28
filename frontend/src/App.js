import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import AuthForm from './pages/AuthForm';
import { EmployeeProfileForm } from './components/Auth/employee/EmployeeProfileForm';
import ManageBookings from './components/Dashboard/Sections/ManageBookings';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/employee/profile" element={<EmployeeProfileForm />} />
      </Routes>
    </Router>
  );
}

export default App;