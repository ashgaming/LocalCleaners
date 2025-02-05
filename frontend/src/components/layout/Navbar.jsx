import React, { useState, useEffect, useRef, memo } from 'react';
import { Home, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const imgRef = useRef(null)


  
  useEffect(() => {
    const img = imgRef.current;
    
    gsap.set(img, {
      position: 'fixed',
      top: '50%',
      right: -1000,
      translateY: '-50%', // Center the image vertically
    });
    
    // Animation: Right to left on scroll
    gsap.to(img, {
      x: () => -window.innerWidth + img.clientWidth - 50, // Travel left across the screen
      scrollTrigger: {
        trigger: img, // Trigger animation on the image itself
        start: 'top right', // Animation starts when the top of the image is at the right edge of the viewport
        end: 'top left', // Animation ends when the top of the image reaches the left edge of the viewport
        scrub: true, // Smoothly tie the animation to the scroll position
      },
    });
  }, []);

  
  const location = useLocation();
  if (['/dashboard', '/login', '/admin'].includes(location.pathname)) {
    return null;
  }
  
  const navbg = `bg-[url(https://cdn.leonardo.ai/users/e15b22cf-87d1-48f9-a0ed-397ea6753634/generations/1700d358-a554-478e-9209-46df5ed2ddb6/Leonardo_Phoenix_10_A_mesmerizing_professional_graphic_design_3.jpg)]`
  return (
    <nav className={`absolute bg-white backdrop-blur-sm shadow-lg w-[90%] z-10 m-5 rounded-sm md:rounded-full md:w-[98%] xl:rounded-full `}>
      {/* <img ref={imgRef} src={require('../../Assets/images/vaccum-cleaner.png')} alt=''
        className='w-16 h-16 fixed' /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">LocalCleaners</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Dashboard
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-600">Services</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600">Contact</Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 text-blue-600"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;