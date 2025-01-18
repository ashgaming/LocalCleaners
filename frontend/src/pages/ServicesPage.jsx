import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import PricingCard from '../components/Landing/PricingCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscriptionPlan } from '../redux/actions/AdminActions';
import { GET_SUBSCRIPTION_PLAN_SUCCESS } from '../redux/constants/SubscriptionConstants';
import PricingSkeleton from '../skeletons/PricingSkeleton';

const ServicesPage = () => {
  const dispatch = useDispatch();
  const date = new Date();
  const { loading, subscription = [], error, success } = useSelector(state => state.getSubscriptionPlan)
  useEffect(() => {
    const localPlans = JSON.parse(localStorage.getItem('SUBSCRIPTION_PLAN_LIST')) || null;
    if (localPlans?.date !== date.toLocaleDateString()) {
      localStorage.removeItem('SUBSCRIPTION_PLAN_LIST')
      dispatch(getSubscriptionPlan())
    } else {
      dispatch({
        type: GET_SUBSCRIPTION_PLAN_SUCCESS,
        payload: localPlans.plans
      })
    }
  }, [])



  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Local Clenears Services</h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
          </div>

          {
            loading ? (<PricingSkeleton />) :

              error ?
                (
                  <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span class="font-medium">Something Went Wrong</span>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-3 gap-8">
                    {subscription.map((plan) => (
                      <PricingCard key={plan.id} plan={plan} />
                    ))}
                  </div>
                )
          }


        </div>
      </div>
    </>
  );
}

export default ServicesPage;