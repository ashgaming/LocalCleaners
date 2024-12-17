import React from 'react';

export default function CustomButton({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) {
  const baseStyles = 'px-4 py-2 rounded-lg transition duration-200 font-medium focus:ring-4';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-200'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}