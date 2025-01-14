import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Check } from 'lucide-react';
import { setSelectedPlan } from '../../redux/actions/SubscriptionActions'; 


const PricingCard = ({ plan }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectPlan = () => {
    dispatch(setSelectedPlan(plan));
    navigate('/payment');
  };

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
      <p className="text-gray-600 mb-6">{plan.description}</p>
      <div className="text-4xl font-bold mb-6">
        Rs{plan.price}<span className="text-lg font-normal text-gray-600">/{plan.duration}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSelectPlan}
        className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Get Started
      </button>
    </div>
  );
}

export default PricingCard;