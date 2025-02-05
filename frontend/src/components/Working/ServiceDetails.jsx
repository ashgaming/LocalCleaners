import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

export default function ServiceDetails({booking}) {
 
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Service Details</h2>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <User className="h-5 w-5 text-gray-400 mr-3" />
          <span>{`${booking?.user?.fullname?.firstname} ${booking?.user?.fullname?.lastname}`} - {booking?.service}</span>
        </div>
        
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-gray-400 mr-3" />
          <span>{booking.BookingData?.location}</span>
        </div>
        
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-gray-400 mr-3" />
          <span>{booking?.BookingData?.date} at {booking?.BookingData?.time}</span>
        </div>
      </div>
    </div>
  );
}