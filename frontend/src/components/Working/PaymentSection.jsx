import React, { useState } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';
import OnlinePayment from './OnlinePayment'
import CashPayment from './CashPayment'

export default function PaymentSection({amount}) {
  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Payment</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => setPaymentMethod('cash')}
          className={`p-4 rounded-lg border flex items-center justify-center ${
            paymentMethod === 'cash'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          }`}
        >
          <DollarSign className="h-5 w-5 mr-2" />
          Cash Payment
        </button>

        <button
          onClick={() => setPaymentMethod('online')}
          className={`p-4 rounded-lg border flex items-center justify-center ${
            paymentMethod === 'online'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          }`}
        >
          <CreditCard className="h-5 w-5 mr-2" />
          Online Payment
        </button>
      </div>

      {paymentMethod === 'cash' && <CashPayment amounts={amount} />}
      {paymentMethod === 'online' && <OnlinePayment />}
    </div>
  );
}