import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PaymentForm } from '../../components/subscription/PaymentForm';
import { PaymentSummary } from '../../components/subscription/PaymentSummary';
import { PaymentMethods } from '../../components/subscription/PaymentMethods';
import { UPIForm } from '../../components/subscription/UPIForm';
import  CashPayment  from '../../components/subscription/CashPayment';
import  BackButton from '../../components/subscription/BackButton';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { selectedPlan } = useSelector((state) => state.subscriptionInfo);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [upiId, setUpiId] = useState('');

  if (!selectedPlan) {
    console.log('hit')
    navigate('/pricing');
    return null;
  }

  const handlePaymentSubmit = (formData) => {
    console.log('Processing payment:', { ...formData, paymentMethod, upiId });
    alert('Payment processed successfully!');
  };

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'card':
        return <PaymentForm onSubmit={handlePaymentSubmit} />;
      case 'upi':
        return (
          <UPIForm 
            upiId={upiId} 
            onChange={(e) => setUpiId(e.target.value)} 
          />
        );
      case 'cash':
        return <CashPayment />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <BackButton to="/payment" />
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-8">Complete Your Purchase</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
              <PaymentMethods 
                selected={paymentMethod} 
                onSelect={setPaymentMethod} 
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
              {renderPaymentForm()}
            </div>
          </div>
          
          <div>
            <PaymentSummary />
          </div>
        </div>
      </div>

      <button
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Next
          </button>
    </div>
  );
};

export default CheckoutPage;