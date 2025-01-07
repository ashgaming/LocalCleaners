import React, { useEffect, useState } from 'react'
import RequestStatusBadge from './RequestStatusBadge';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Auth/ui/Loader';
import { getSubscription, getSubscriptionPlan } from '../../../redux/actions/SubscriptionActions';
import PlanForm from '../../subscription/PlanForm';

const SubscriptionSection = () => {
    const dispatch = useDispatch();
    const [isFormVisible, setIsFormVisible] = useState(false)

    const { loading, error, success, subscription = [] } = useSelector(state => state.getSubscription)

    const { loading: plansLoading, subscription: plans = [], error: plansError, success: plansSuccess } = useSelector(state => state.getSubscriptionPlan)

    const { user } = useSelector(state => state.userData)
    useEffect(() => {
        (function () {
            if (!user?.employee) {
                if (!success) { dispatch(getSubscription()) }
            } else if (user.employee.role === 'admin') {
                if (!plansSuccess) { dispatch(getSubscriptionPlan()) }
            }
        })()
    }, [])

    return (
        <div>
            {
                loading && <Loader />
            }

            {
                error && <h1>{error}</h1>
            }

            {(!user?.employee) &&
                <div className="bg-white rounded-lg shadow p-4 md:p-6">
                    <h2 className="text-xl font-semibold mb-4">Subscription List</h2>
                    {
                        success &&
                        <div className="space-y-4">
                            {subscription?.map((sub) => (
                                <div
                                    key={sub?._id}
                                    //   onClick={() => HandleBookingDetails(sub)}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg space-y-2 sm:space-y-0"
                                >
                                    <div>
                                        <p className="font-semibold">
                                            <span className='mr-3'>{sub?.plan?.service?.name}</span>
                                            <RequestStatusBadge status={sub?.payment?.status} />
                                        </p>
                                        <p className="text-gray-600">{sub?.plan?.address}</p>
                                    </div>
                                    <div className="sm:text-right">
                                        <p className="font-semibold">Rs {sub?.payment?.amount}</p>
                                        <p className="text-gray-600">{sub?.payment?.method}</p>
                                    </div>


                                </div>
                            ))}
                        </div>
                    }
                </div>

            }

            {(user?.employee?.role === 'admin' || 'employee') &&
                <div className="bg-white rounded-lg shadow p-4 mt-3 md:p-6">
                    <h2 className="text-xl font-semibold mb-4">Create Services</h2>
                    <button onClick={()=>setIsFormVisible(!isFormVisible)}> \/ </button>
                    {
                        isFormVisible &&
                        <div className="space-y-4">
                            <PlanForm />
                        </div>
                    }
                </div>
            }

            {(user?.employee?.role === 'admin' || 'employee') &&
                <div className="bg-white rounded-lg shadow p-4 mt-3 md:p-6">
                    <h2 className="text-xl font-semibold mb-4">Services List</h2>
                    {
                        plansSuccess &&
                        <div className="space-y-4">
                            {plans?.map((sub) => (
                                <div
                                    key={sub?._id}
                                    //   onClick={() => HandleBookingDetails(sub)}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg space-y-2 sm:space-y-0"
                                >
                                    <div>
                                        <p className="font-semibold">
                                            <span className='mr-3'>{sub?.name}</span>
                                            <RequestStatusBadge status={sub?.payment?.status} />
                                        </p>
                                        <p className="font-semibold">Rs {sub?.price} / {sub?.duration}</p>
                                    </div>
                                    <div className="sm:text-right">
                                        <p className="text-gray-600">{sub?.payment?.method}</p>
                                        {
                                            sub?.features.map((features,index) => (
                                                <p key={index} className="text-gray-600">{features}</p>
                                            ))
                                        }
                                    </div>


                                </div>
                            ))}
                        </div>
                    }
                </div>
            }
        </div>
    )
};

export default SubscriptionSection;
