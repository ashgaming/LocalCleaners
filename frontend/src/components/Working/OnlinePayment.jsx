import React, { useState } from 'react';
import { processOnlinePayment } from './utils/timeUtilis'; 

export default function OnlinePayment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      await processOnlinePayment({ cardNumber, expiry, cvv });
      // Handle successful payment
    } catch (error) {
      // Handle payment error
    } finally {
      setIsProcessing(false);
    }
  };

  return (

    <h1>
      Online Payment not available
    </h1>
    // <form onSubmit={handleSubmit} className="space-y-4">
    //   <div>
    //     <label className="block text-sm font-medium text-gray-700 mb-1">
    //       Card Number
    //     </label>
    //     <input
    //       type="text"
    //       value={cardNumber}
    //       onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
    //       maxLength={16}
    //       className="w-full px-3 py-2 border rounded-md"
    //       placeholder="1234 5678 9012 3456"
    //     />
    //   </div>

    //   <div className="grid grid-cols-2 gap-4">
    //     <div>
    //       <label className="block text-sm font-medium text-gray-700 mb-1">
    //         Expiry Date
    //       </label>
    //       <input
    //         type="text"
    //         value={expiry}
    //         onChange={(e) => setExpiry(e.target.value)}
    //         placeholder="MM/YY"
    //         className="w-full px-3 py-2 border rounded-md"
    //       />
    //     </div>

    //     <div>
    //       <label className="block text-sm font-medium text-gray-700 mb-1">
    //         CVV
    //       </label>
    //       <input
    //         type="password"
    //         value={cvv}
    //         onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
    //         maxLength={3}
    //         className="w-full px-3 py-2 border rounded-md"
    //         placeholder="123"
    //       />
    //     </div>
    //   </div>

    //   <button
    //     type="submit"
    //     disabled={isProcessing}
    //     className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-300"
    //   >
    //     {isProcessing ? 'Processing...' : 'Pay Now'}
    //   </button>
    // </form>
  );
}