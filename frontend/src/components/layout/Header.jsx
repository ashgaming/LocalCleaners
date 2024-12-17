import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex items-center p-4">
      <Home className="h-8 w-8 text-blue-600" />
      <Link to="/" className="ml-2 text-xl font-bold text-gray-800">LocalCleaners</Link>
    </div>
  );
}