import React, { useEffect } from 'react'
import QuickActions from '../QuickAction';
import BookingsList from '../BookingList';
import DashBoardHeader from '../DashBoardHeader';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Auth/ui/Loader'
import { listMyBooking, listBooking } from '../../../redux/actions/BookingActions';

const upcomingBookings = [
  { id: 1, date: '2024-03-20', time: '09:00 AM', type: 'Regular Cleaning', address: '123 Main St' },
  { id: 2, date: '2024-03-25', time: '02:00 PM', type: 'Deep Cleaning', address: '456 Oak Ave' },
];

const BookingSection = () => {

  const dispatch = useDispatch();
  const data = useSelector(state => state.userData)
  const { employee, user } = data
  console.log(data)
  useEffect(() => {
    const fetchData = async () => {
      if (user.employee) {
        await dispatch(listBooking());
      }

      else if (user) {
        await dispatch(listMyBooking());
      }

      else {
        return
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const { error, loading, success, mybooking } = useSelector(state => state.listMyBooking)
  const { error: bookingError, success: bookingSuccess, loading: bookingLoading, booking } = useSelector(state => state.listBooking)

  return (
    <>

      <DashBoardHeader title={'Dashboard'} />

      <QuickActions />

      {/* <div className="mt-8">
        <BookingsList title={`Upcoming Bookings `} bookings={upcomingBookings} />
      </div> */}

      {
        !user?.employee &&
        <div className="mt-8">
          {loading ? <Loader /> : <BookingsList title={`My Bookings `} bookings={mybooking.data} />}
        </div>
      }

      {
        user?.employee &&
        <div className="mt-8">
          <BookingsList title={`Bookings `} bookings={booking.bookings} />
        </div>
      }
    </>
  )
}

export default BookingSection;
