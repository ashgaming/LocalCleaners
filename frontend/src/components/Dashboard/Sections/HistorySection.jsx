import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import BookingsList from '../BookingList'
import { useSelector } from "react-redux";

const HistorySection = () => {
  const { error, loading, success, mybooking } = useSelector((state) => state.listMyBooking)
  return (
    <div>
      <DashBoardHeader title={'History'} />

      <BookingsList title='Completed Bookings'  bookings={mybooking?.data} />
    </div>
  )
}

export default HistorySection
