import React, { useEffect } from 'react';
import { listPendingBooking } from '../../../redux/actions/BookingActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Auth/ui/Loader';
import RequestsList from './RequestsList';


export default function ManageBookings({ title }) {
  const dispatch = useDispatch()

  //  if (!bookings) return null;
  useEffect(() => {
    (async () => {
      dispatch(await listPendingBooking())
  })()
  }, [])

  const { loading, error, pending, success } = useSelector(state => state.listPendingBooking)


  if (loading) return <Loader />

  return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6">

      <RequestsList pending={pending?.data}/>

    {
      /* 
     


      <h2 className="text-xl font-semibold mb-4 mt-5">{title}</h2>
      <div className="space-y-4">
        {pending ?
          <>
            {
              pending?.data?.map((booking) => (
                <div
                  key={booking?._id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg space-y-2 sm:space-y-0"
                >
                  <div>
                    <p className="font-semibold">{booking.service}</p>
                    <p className="text-gray-600">{booking.BookingData?.location}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-semibold">{booking?.BookingData?.date}</p>
                    <p className="text-gray-600">{booking?.BookingData?.time}</p>
                  </div>
                  <div className="sm:text-right">
                    <button >Manage</button>
                  </div>
                </div>
              ))}

          </> : <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg space-y-2 sm:space-y-0"
          >No Booking</div>
        }
      </div>

       */
    }
    </div>
  );
}

