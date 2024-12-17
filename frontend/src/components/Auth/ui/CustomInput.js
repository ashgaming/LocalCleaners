import React from 'react';


export default function CustomInput({ 
  label, 
  icon: Icon, 
  error, 
  className = '', 
  ...props 
}) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        )}
        <input
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}