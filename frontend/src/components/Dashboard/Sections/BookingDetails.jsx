import React, { memo, useEffect, useMemo, useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import AssignEmployeeForm from './AssignEmployeeForm';
import RequestStatusBadge from './RequestStatusBadge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const BookingDetails = memo(({ booking, isOpen, onClose, setIsDetailsOpen }) => {
  const [status, setStatus] = useState(null);
  const { user } = useSelector(state => state.userData)

  useEffect(() => {
    if (status == 'success') {
      const timer = setTimeout(() => {
        setIsDetailsOpen(false);
        setStatus(null)
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timer);
    }
  }, [status]);

  const HandleCancelBooking = () => {

  }


  const HandleStartWork = (e) => {
    e.preventDefault()
   /* setIsDetailsOpen(false)
    const date = new Date()
    const activeWork = {
      Start_Time: date,
      Booking_id: booking?._id,
    }*/

 //   localStorage.setItem('activeWork', JSON.stringify(activeWork));

  }



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => {
          setStatus(null);
          onClose()
        }} />

        <div className="relative bg-white rounded-lg max-w-lg w-full mx-auto shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold">Booking Details</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            {status === 'success' && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Request successfully updated
              </div>
            )}

            {status === 'error' && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Failed to update booking. Please try again.
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Your Information</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Name: {booking.user?.fullname?.firstname} {booking.user?.fullname?.lastname} </p>
                  <p>Email: {booking.user?.email}</p>
                  <p>Phone: {booking?.phoneNumber}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Cleaner Information</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Name: {booking.employee?.fullname?.firstname} {booking.employee?.fullname?.lastname} </p>
                  <p>Gender: {booking.employee?.gender || 'Unspecified'} </p>
                  <p>Email: {booking.employee?.email}</p>
                  <p>Phone: {booking?.employee?.phoneNumber || 'None'}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Service Details</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Service: {booking?.service}</p>
                  <p>Date: {booking.BookingData?.date}</p>
                  <p>Time: {booking.BookingData?.time}</p>
                  <p>Address: {booking.BookingData?.location}</p>
                  {booking.notes && <p>Notes: {booking.notes}</p>}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Status</h4>
                <RequestStatusBadge status={booking?.work_status} />
              </div>

              <div class="flex space-x-4 w-full">
                <button className="bg-red-300 w-full hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={HandleCancelBooking}
                >Cancel</button>

                {
                  user?.employee?._id === booking?.employee?._id &&
                  <Link to={`/active-work`} className='w-full'>
                    <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    //  onClick={e => HandleStartWork(e)}
                    >Start</button>
                  </Link>
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
)

export default BookingDetails;