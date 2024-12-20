import React from 'react';
import { AlertCircle } from 'lucide-react';


export default function ErrorMessage({ children, className = '' }) {
  return (
    <div className={`flex items-center text-red-600 text-sm mt-1 ${className}`}>
      <AlertCircle className="h-4 w-4 mr-1" />
      <span>{children}</span>
    </div>
  );
}