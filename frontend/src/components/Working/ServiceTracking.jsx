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
import { FetchData, getEmployeesPaymentCode } from '../../helper/ApiCall';

export default function ServiceTracking() {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.userData)
    const [booking, setBooking] = useState(null)

    const [startTimer, setStartTimer] = useState(false)

    const RequestPaymentOtp = async (e) => {
        e.preventDefault();
        //const { success , error } = 
       getEmployeesPaymentCode()
      //  if(error){alert('Failed to send Payment Code')}
    }

    useEffect(() => {

        const fetchDetails = async () => {
            try {
                const storedData = localStorage.getItem('activeWork');
                const id = storedData ? JSON.parse(storedData)?.Booking_id : null;

                if (!id) {
                    throw new Error('No booking ID found.');
                }

                const url = user?.employee?._id ? `${BACKEND_URL}/bookings/get-booking-id` : `${BACKEND_URL}/bookings/get-user-booking`

                const response = await axios.get(`${url}`, {
                    params: { _id: id },
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${user?.token}`,
                    },
                });

                if (response.status === 200) {

                    console.log(response.data.booking)
                    setBooking(response.data.booking);
                }
            } catch (err) {
                console.error(err.message);
                alert(err.message);
                //  navigate('/dashboard')            
            }
        };

        fetchDetails();
    }, [user, navigate, setBooking]);

    if (!booking) return null;


    return (
        <div className="min-h-screen bg-gray-50 py-8 mt-20">
            <div className="max-w-3xl mx-auto px-4">
                <ServiceDetails booking={booking} />
                {user?.employee?._id &&
                    <div className="mt-6">
                        <ServiceTimer startTimer={startTimer} />
                    </div>}

                {
                    user?.employee?._id ?
                        (
                            <>
                                {!startTimer && <div className="mt-6">
                                    <OTPVerification title={`Start`} _id={booking?._id} setStartTimer={setStartTimer} />
                                </div>}

                                {startTimer && (<div className="mt-6">
                                    <OTPVerification title={`End`} _id={booking?._id} setStartTimer={setStartTimer} />
                                </div>)}
                            </>
                        )
                        :
                        (
                            <>
                                {
                                    booking?.work_status === 'ongoing' &&
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <div className="flex items-center mb-4">
                                            <Lock className="h-6 w-6 text-blue-600 mr-2" />
                                            <h2 className="text-xl font-semibold">Start OTP</h2>
                                        </div>

                                        <div className="space-y-4">
                                            <p>{booking?.otp?.start_otp}</p>
                                        </div>
                                    </div>

                                }


                            {  
                            booking.work_status === 'started' &&    
                            <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <Lock className="h-6 w-6 text-blue-600 mr-2" />
                                        <h2 className="text-xl font-semibold">End OTP</h2>
                                    </div>

                                    <div className="space-y-4">
                                        <p>{booking?.otp?.end_otp}</p>
                                    </div>
                                </div>
}

                            </>
                        )
                }
                {
                    !user?.employee?._id ?
                        <div className="mt-6">
                            <PaymentSection amount={booking?.payment?.amount} />
                        </div> :

                        <div className="mt-6">
                            <p className="text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-2 my-2">
                                Please provide the OTP only after receiving the payment.
                            </p>
                            <button onClick={(e) => RequestPaymentOtp(e)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Request Payment Otp</button>
                        </div>


                }

            </div>
        </div>
    );
}