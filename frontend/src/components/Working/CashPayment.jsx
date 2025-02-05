import React, { useState } from 'react';
import { processCashPayment } from './utils/timeUtilis';

export default function CashPayment({amounts}) {
  const [amount, setAmount] = useState(amounts);
  const [end_otp, setEnd_otp] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      await processCashPayment(parseFloat(amount));
      // Handle successful payment
    } catch (error) {
      // Handle payment error
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount Received
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter amount"
          min="0"
          step="0.01"
        />

        <input
          type="number"
          value={end_otp}
          onChange={(e) => setEnd_otp(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mt-2"
          placeholder="Enter Cash Payment Otp"
          min="0"
          step="0.01"
        />
      </div>

      <button
        type="submit"
        disabled={isProcessing || !amount}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-300"
      >
        {isProcessing ? 'Processing...' : 'Confirm Payment'}
      </button>
    </form>
  );
}