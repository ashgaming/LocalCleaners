import React, { useEffect, useState } from 'react'
import BookingsList from '../components/Dashboard/BookingList'
import { TodaysBookings } from '../helper/ApiCall';
import { Link } from 'react-router-dom';


const TodaysBookingsList = () => {
    const [Booking , setBookings] = useState([]);
    const [error , setError] = useState();
    useEffect(()=>{
          TodaysBookings(setBookings,setError)
    },[])

  return (
    <div className="md:ml-64 p-4 md:p-8 mt-16 md:mt-0">
        <Link to='/' >Back</Link>
        <BookingsList title={`Todays Booking`} bookings={Booking}/>
        {
            Booking.length === 0 && <h1>No Booking for Today</h1>
        }
    </div>
  )
}

export default TodaysBookingsList
