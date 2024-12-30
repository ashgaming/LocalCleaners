import React, { useEffect, useState } from 'react';
import ServiceTimer from './ServiceTimer';
import ServiceDetails from './ServiceDetails';
import OTPVerification from './OTPVerification';
import PaymentSection from './PaymentSection';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../../redux/actions/UserActions';
import { Lock } from 'lucide-react';

export default function ServiceTracking() {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.userData)
    const [booking, setBooking] = useState(null)

    const [startTimer, setStartTimer] = useState(false)

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const storedData = localStorage.getItem('activeWork');
                const id = storedData ? JSON.parse(storedData)?.Booking_id : null;

                if (!id) {
                    throw new Error('No booking ID found.');
                }

                const response = await axios.get(`${BACKEND_URL}/bookings/get-booking-id`, {
                    params: { _id: id },
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${user?.token}`,
                    },
                });

                if (response.status === 200) {
                    setBooking(response.data.booking);
                }
            } catch (err) {
                console.error(err.message);
                alert('An error occurred: ' + err.message);
                //   navigate('/');
            }
        };

        fetchDetails();
    }, [user, navigate, setBooking]);

    if (!booking) return null;


    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-3xl mx-auto px-4">
                <ServiceDetails booking={booking} />
                <div className="mt-6">
                    <ServiceTimer startTimer={startTimer} />
                </div>

                {
                    user?.employee?._id ?
                        (
                            <>
                                {!startTimer && <div className="mt-6">
                                    <OTPVerification title={`Start`} _id={booking._id} setStartTimer={setStartTimer} />
                                </div>}

                                {startTimer && (<div className="mt-6">
                                    <OTPVerification title={`End`} _id={booking._id} setStartTimer={setStartTimer} />
                                </div>)}
                            </>
                        )
                        :
                        (
                            <>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <Lock className="h-6 w-6 text-blue-600 mr-2" />
                                        <h2 className="text-xl font-semibold">Start OTP</h2>
                                    </div>

                                    <div className="space-y-4">
                                        <p>{booking?.otp?.start_otp}</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <Lock className="h-6 w-6 text-blue-600 mr-2" />
                                        <h2 className="text-xl font-semibold">Start OTP Verification</h2>
                                    </div>

                                    <div className="space-y-4">
                                        <p>{booking?.otp?.end_otp}</p>
                                    </div>
                                </div>

                            </>
                        )
                }
                <div className="mt-6">
                    <PaymentSection amount={booking?.payment?.amount} />
                </div>
            </div>
        </div>
    );
}