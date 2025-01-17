import React from 'react';
import { useSelector } from 'react-redux';
import { calculateTax } from '../../helper/subscriptionHelper';

export const PaymentSummary = ({setAmount}) => {
  const { selectedPlan, months } = useSelector((state) => state.subscriptionInfo);
  
  if (!selectedPlan) return null;
  
  const subtotal = selectedPlan.price * months;
  const { taxAmount, total } = calculateTax(subtotal);

  setAmount(total.toFixed(2))

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Plan</span>
          <span className="font-medium">{selectedPlan.name}</span>
        </div>
        <div className="flex justify-between">
          <span>Monthly Rate</span>
          <span>${selectedPlan.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Duration</span>
          <span>{months} months</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax (18%)</span>
          <span>${taxAmount.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};