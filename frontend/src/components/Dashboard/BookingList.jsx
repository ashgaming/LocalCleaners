import React, { useState } from 'react';
import BookingDetails from './Sections/BookingDetails';
import RequestStatusBadge from './Sections/RequestStatusBadge';


export default function BookingsList({ title = '', bookings = [] }) {

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isBookingDetailsOpen, setIsBookingDetailsOpen] = useState(false);

  if (!bookings) return null;

  const HandleBookingDetails = (booking) => {
    setSelectedBooking(booking)
    setIsBookingDetailsOpen(true)
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {bookings?.map((booking) => (
          <div
            key={booking?._id}
            onClick={() => HandleBookingDetails(booking)}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg space-y-2 sm:space-y-0"
          >
            <div>
              <p className="font-semibold">
                <span className='mr-3'>{booking.service}</span>
                <RequestStatusBadge status={booking?.work_status} />
              </p>
              <p className="text-gray-600">{booking.BookingData?.location}</p>
            </div>
            <div className="sm:text-right">
              <p className="font-semibold">{booking?.BookingData?.date}</p>
              <p className="text-gray-600">{booking?.BookingData?.time}</p>
            </div>


          </div>
        ))}
      </div>

      {
        selectedBooking && (
           <BookingDetails
            booking={selectedBooking}
            isOpen={isBookingDetailsOpen}
            onClose={() => setIsBookingDetailsOpen(false)}
            setIsDetailsOpen={setIsBookingDetailsOpen}
          />
        )
      }
    </div>
  );
}