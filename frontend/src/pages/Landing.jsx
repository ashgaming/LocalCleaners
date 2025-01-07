import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
const Navbar = React.lazy(() => import('../components/Navbar'));
const Hero = React.lazy(() => import('../components/Landing/Hero'));
const EmployeeHero = React.lazy(() => import('../components/Landing/EmployeeHero'));
const Features = React.lazy(() => import('../components/Landing/Features'));
const ContactForm = React.lazy(() => import('../components/Landing/ContactForm'));
const ElementLoader = React.lazy(() => import('../components/ui/ELementLoader'));



const Landing = () => {
  const {user} = useSelector(state=>state.userData)

  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<ElementLoader />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<ElementLoader />}>
        {
          user?.employee ? <EmployeeHero /> :
        <Hero />
        }
      </Suspense>
      <Suspense fallback={<ElementLoader />}>
        <Features />
      </Suspense>
      <Suspense fallback={<ElementLoader />}>
        <ContactForm />
      </Suspense>
    </div>
  );
}

export default Landing;