import React from 'react';

export default function RoleButton({ icon: Icon, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-20 h-20 flex-col items-center p-3 rounded-lg transition-all duration-200 ${
        active
          ? 'bg-blue-100 text-blue-600'
          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm mt-1">{label}</span>
    </button>
  );
}