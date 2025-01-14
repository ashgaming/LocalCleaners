import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { getSubscriptionPlan } from '../../redux/actions/AdminActions';
import ElementLoader from '../ui/ELementLoader';
import PlanForm from '../subscription/PlanForm';

const Services = () => {
  const { subscription, error, success, loading } = useSelector((state) => state.getSubscriptionPlan);
  const [isFormOpen, setIsFormOpen] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!success) {
      dispatch(getSubscriptionPlan());
    }
  }, [])

  if (loading) return <ElementLoader />

  return (
    <div className="p-6">
      <span onClick={() => setIsFormOpen(!isFormOpen)}><h2 className="text-2xl font-bold mb-6">Create Service</h2></span>
      {isFormOpen && <PlanForm />}
      <h2 className="text-2xl font-bold mb-6">Services</h2>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscription.map((service) => (
              <tr key={service?.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {service?.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    Rs {service?.price}/{service?.duration}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {service?.description}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;