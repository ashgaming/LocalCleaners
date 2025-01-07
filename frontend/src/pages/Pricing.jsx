import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import PricingCard from '../components/Landing/PricingCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscriptionPlan } from '../redux/actions/SubscriptionActions';
import { GET_SUBSCRIPTION_PLAN_SUCCESS } from '../redux/constants/SubscriptionConstants';

const Pricing = () => {
  const dispatch = useDispatch();
  const date = new Date();
  const { loading , subscription = [] , error , success } = useSelector(state=>state.getSubscriptionPlan)
  useEffect(()=>{
    const localPlans = JSON.parse(localStorage.getItem('SUBSCRIPTION_PLAN_LIST')) || null;
    if(localPlans?.date !== date.toLocaleDateString()){
      dispatch(getSubscriptionPlan())
    }else{
         dispatch({
                  type: GET_SUBSCRIPTION_PLAN_SUCCESS,
                  payload: localPlans.plans
              })
    }
  },[])

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 999,
      description: 'Ideal for small households or spaces with minimal cleaning needs.',
      features: [
        '1 Service Staff',
        '6 Days of Regular Cleaning per Month',
        'Coverage for Small Areas',
        'Basic Customer Support',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 1998,
      description: 'Designed for medium-sized homes or growing businesses.',
      features: [
        '2 Service Staff',
        'Daily Regular Cleaning & 6 Deep Cleaning Sessions per Month',
        'Covers Any Size Area',
        'Priority Customer Support',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 2999,
      description: 'Perfect for large offices, organizations, or estates.',
      features: [
        '8-10 Service Staff',
        'Unlimited Cleaning Sessions',
        'Unlimited Area Coverage',
        '24/7 Premium Customer Support',
      ],
    },
    {
      id: 'custom',
      name: 'Custom',
      price: '99 - 2999',
      description: 'Tailored to your specific cleaning needs. Pay as you go.',
      features: [
        'Customizable Number of Service Staff',
        'Flexible Cleaning Schedules',
        'Custom Area Coverage',
        '24/7 Dedicated Support',
      ],
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      price: 3999,
      description: 'Comprehensive solution for high-demand spaces and luxury facilities.',
      features: [
        'Dedicated Cleaning Team of 10+ Members',
        'Round-the-Clock Cleaning Services',
        'Full Building or Facility Coverage',
        'VIP Concierge Support with On-Demand Assistance',
      ],
    },
    {
      id: 'public',
      name: 'Public Space Cleaner',
      price: 4999,
      description: 'Specialized service for maintaining cleanliness in public areas such as parks, gardens, and recreational spaces.',
      features: [
        'Team of 15+ Service Staff',
        'Daily Cleaning and Waste Management',
        'Large Area Coverage (Parks, Playgrounds, Gardens, etc.)',
        'Eco-Friendly Practices and Sustainable Waste Disposal',
        'Support for Special Events and High-Footfall Days',
      ],
    },
  ];
  
  return (

    <>
    <Navbar />
      <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {subscription.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;