import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Wrapper from './components/ui/Wrapper';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Navbar from './components/layout/Navbar';
const ComplainForm = React.lazy(() => import('./pages/ComplainForm'));
const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const Landing = React.lazy(() => import('./pages/Landing'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Booking = React.lazy(() => import('./pages/Booking'));
const AuthForm = React.lazy(() => import('./pages/AuthForm')); 
const SupportPage = React.lazy(() => import('./pages/Support'));
const WorkingPage = React.lazy(() => import('./pages/WorkingPage'));
const CheckoutPage = React.lazy(() => import('./pages/subscription/CheckoutPage'));
const PaymentPage = React.lazy(() => import('./pages/subscription/PaymentPage'));
const UserDataInfo = React.lazy(() => import('./pages/subscription/UserInfoPage'));
const TodaysBookingsList = React.lazy(() => import('./pages/TodaysBookingsList'));
const ManageBookings = React.lazy(() => import('./components/Dashboard/Sections/ManageBookings'));
const EmployeeProfileForm = React.lazy(() => import('./components/Auth/employee/EmployeeProfileForm'));

const routes = [
  { link: '/', element: <Landing /> },
  { link: '/dashboard', name: 'dashboard', element: <Dashboard /> },
  { link: '/services', element: <ServicesPage /> },
  { link: '/contact', element: <Contact /> },
  { link: '/booking', element: <Booking /> },
  { link: '/login', element: <AuthForm /> },
  { link: '/support', element: <SupportPage /> },
  { link: '/employee/profile', element: <EmployeeProfileForm /> },
  { link: '/active-work', element: <WorkingPage /> },
  { link: '/todays-works', element: <TodaysBookingsList /> },
  { link: '/payment', element: <PaymentPage /> },
  { link: '/checkout/:id?', element: <CheckoutPage /> },
  { link: '/userDataInfo', element: <UserDataInfo /> },
  { link: '/admin', name: 'admin', element: <AdminDashboard /> },
  { link: '/report-complain', element: <ComplainForm /> },
  { link: '/terms-and-conditions', element: <TermsAndConditions /> },
  { link: '/privacy-policy', element: <PrivacyPolicy /> },
];

const App = () => {

  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.link}
              element={<Wrapper>{route.element}</Wrapper>}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;