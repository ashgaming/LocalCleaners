import React from 'react';
import { Banknote } from 'lucide-react';

const CashPayment = () => {
  return (
    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
      <div className="flex items-center gap-3 mb-3">
        <Banknote className="w-5 h-5 text-yellow-600" />
        <h3 className="font-medium text-yellow-800">Cash Payment Instructions</h3>
      </div>
      <p className="text-sm text-yellow-700">
        Please visit our nearest office to complete the cash payment. Bring the following reference number:
      </p>
      <p className="mt-2 font-mono text-lg text-center bg-white p-2 rounded border border-yellow-200">
        {Math.random().toString(36).substring(2, 10).toUpperCase()}
      </p>
    </div>
  );
};

export default CashPayment;