import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import { createSubscription, setMonths } from '../../redux/actions/SubscriptionActions';
import { CREATE_SUBSCRIPTION_RESET } from '../../redux/constants/SubscriptionConstants';
import  BackButton from '../../components/subscription/BackButton';

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedPlan, months } = useSelector((state) => state.subscriptionInfo);
 
  if (!selectedPlan || selectedPlan === null) {
    navigate('/pricing');
    return null;
  }

  const handleMonthsChange = (e) => {
    dispatch(setMonths(parseInt(e.target.value)));
  };

  const handleProceedToCheckout = (e) => {
    e.preventDefault()

    navigate('/userDataInfo');
    
  };


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="mb-6">
          <BackButton to="/pricing" />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <CreditCard className="h-12 w-12 text-blue-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-8">Subscription Details</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Selected Plan: {selectedPlan.name}</h3>
            <p className="text-gray-600">{selectedPlan.description}</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subscription Period (months): {months}
            </label>
            <input
              type="range"
              min="1"
              max="24"
              value={months}
              onChange={handleMonthsChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span>Monthly Rate:</span>
              <span>${selectedPlan.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Number of Months:</span>
              <span>{months}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Amount:</span>
              <span>${(selectedPlan.price * months).toFixed(2)}</span>
            </div>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
            onClick={e=>handleProceedToCheckout(e)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;