import React from 'react';
import { CreditCard, Smartphone, Banknote } from 'lucide-react';


export const PaymentMethods = ({ selected, onSelect }) => {
  const methods = [
    { id: 'card', name: 'Card', icon: CreditCard },
    { id: 'upi' , name: 'UPI', icon: Smartphone },
    { id: 'cash' , name: 'Cash', icon: Banknote },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {methods.map(({ id, name, icon: Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => onSelect(id)}
          className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-colors
            ${selected === id 
              ? 'border-blue-500 bg-blue-50 text-blue-700' 
              : 'border-gray-200 hover:border-gray-300'}`}
        >
          <Icon className="w-6 h-6" />
          <span className="font-medium">{name}</span>
        </button>
      ))}
    </div>
  );
};