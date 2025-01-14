import React from 'react';
import { Link } from 'react-router-dom';

export default function EmployeeHero() {
  return (
    <div className="pt-16 md:pt-20 bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            Professional Home Cleaning Services
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            Manage your Cleaning requests
          </p>
          <Link
            to="/dashboard"
            className="inline-block w-full sm:w-auto bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Manage
          </Link>
        </div>
      </div>
    </div>
  );
}