import React from 'react';


export default function BookingsList({ bookings }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg space-y-2 sm:space-y-0"
          >
            <div>
              <p className="font-semibold">{booking.type}</p>
              <p className="text-gray-600">{booking.address}</p>
            </div>
            <div className="sm:text-right">
              <p className="font-semibold">{booking.date}</p>
              <p className="text-gray-600">{booking.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}