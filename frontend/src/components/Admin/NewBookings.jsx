import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ElementLoader from '../ui/ELementLoader';
import { User } from 'lucide-react';
import { listPendingBooking } from '../../redux/actions/BookingActions';
import BookingDetails from '../Dashboard/Sections/BookingDetails';
import RequestStatusBadge from '../Dashboard/Sections/RequestStatusBadge';

const NewBookings = () => {
  const [openPopUp, SetOpenPopUp] = useState(false)
  const { pending, loading, error, success } = useSelector((state) => state.listPendingBooking);
  const dispatch = useDispatch()

  const [selectedBooking, setSelectedBooking] = useState(false)

  useEffect(() => {
    if (!success) { dispatch(listPendingBooking()) }
  }, [])

  const HandleBookingDetails = (booking) => {
    setSelectedBooking(booking)
    SetOpenPopUp(true)
  }


  const initialData = [
    { id: "1", title: "Card 1", description: "", filterCriteriaName: "title" },
    { id: "2", title: "Card 2", description: "Description 2" },
    // Add more cards as needed
  ];

  const [cards, setCards] = useState(initialData);

  if (loading) return <ElementLoader />

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">New Bookings</h2>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <div className="p-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pending?.data?.length > 0 ? (
              pending?.data?.map((booking) => (
                <div
                  key={booking?._id}
                  onClick={() => HandleBookingDetails(booking)}
                  className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 ease-in-out animate-slideUp"
                >
                  <div className="flex flex-col gap-50">
                    <div className="text-xl font-semibold text-gray-800 mb-2 mr-3 flex justify-between">
                      <span>{booking?.user?.fullname?.firstname} {booking?.user?.fullname?.lastname}</span>
                      <span><RequestStatusBadge status={booking?.work_status} /></span>
                      <span> Rs{booking?.payment.amount}</span>

                    </div>
                    <div className='flex gap-3'>
                      <h5> {booking?.BookingData?.date}  </h5>
                      <h4>  {booking?.BookingData?.time} </h4>
                    </div>


                    <p className="mt-1">
                      {booking?.BookingData?.location || "Location not avalible"}
                    </p>


                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No cards available
              </p>
            )}
          </div>
        </div>

        {
          selectedBooking && (
            <BookingDetails
              booking={selectedBooking}
              isOpen={openPopUp}
              onClose={() => SetOpenPopUp(false)}
              setIsDetailsOpen={SetOpenPopUp}
            />
          )
        }
      </div>
    </div>
  )
}

export default NewBookings
