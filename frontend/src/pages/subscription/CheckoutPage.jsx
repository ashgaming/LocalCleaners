import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PaymentForm } from '../../components/subscription/PaymentForm';
import { PaymentSummary } from '../../components/subscription/PaymentSummary';
import { PaymentMethods } from '../../components/subscription/PaymentMethods';
import { UPIForm } from '../../components/subscription/UPIForm';
import CashPayment from '../../components/subscription/CashPayment';
import BackButton from '../../components/subscription/BackButton';
import { CompletePaySubCash } from '../../redux/actions/paymentActions';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { selectedPlan } = useSelector((state) => state.subscriptionInfo);
  const { loading, subscription, success, error } = useSelector((state) => state.completePaySubCash);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [upiId, setUpiId] = useState('');
  const { id } = useParams()
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0);

  const [otp, setOtp] = useState('')

  if (!selectedPlan) {
    navigate('/services');
  }

  const handlePaymentSubmit = async () => {

    switch (paymentMethod) {
      case 'card':
        dispatch(CompletePaySubCash(otp, id, amount))
      case 'upi':
        dispatch(CompletePaySubCash(otp, id, amount))
      case 'cash':
        dispatch(CompletePaySubCash(otp, id, amount))
      default:
        alert('something went wrong...!')
    }
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
        return <CashPayment otp={otp} setOtp={setOtp} />;
      default:
        return <p></p>;
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
            <PaymentSummary setAmount={setAmount} />
          </div>
        </div>
      </div>

      <div className='w-full mt-5 grid md:grid-cols-2 gap-2'>


        <Link to={'/'}>
          <button
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Home
          </button>
        </Link>

        <button
          className={`w-full
            ${otp ? 'bg-blue-600 hover:bg-blue-700 ' : 'bg-gray-500 hover:bg-gray-700 '}
              text-white py-3 px-4 rounded-md transition-colors`}
          disabled={!otp}
          onClick={(e) => handlePaymentSubmit(e)}
        >
          {
            loading ? 'Loading' : 'Pay'
          }
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;