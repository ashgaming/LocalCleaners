import React from 'react'
import QuickActions from '../QuickAction';
import BookingsList from '../BookingList';
import DashBoardHeader from '../DashBoardHeader';

const upcomingBookings = [
    { id: 1, date: '2024-03-20', time: '09:00 AM', type: 'Regular Cleaning', address: '123 Main St' },
    { id: 2, date: '2024-03-25', time: '02:00 PM', type: 'Deep Cleaning', address: '456 Oak Ave' },
  ];

const BookingSection = () => {
    return (
        <>
       
        <DashBoardHeader title={'Dashboard'} />
          

            
        <QuickActions />
        
        <div className="mt-8">
          <BookingsList bookings={upcomingBookings} />
        </div>
            </>
            )
}

            export default BookingSection
