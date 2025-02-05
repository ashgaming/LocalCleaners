import React, { useEffect } from 'react'
import QuickActions from '../QuickAction';
import BookingsList from '../BookingList';
import DashBoardHeader from '../DashBoardHeader';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Auth/ui/Loader'
import { listMyBooking, listBooking } from '../../../redux/actions/BookingActions';
import ElementLoader from '../../ui/ELementLoader';



const BookingSection = () => {
  const { error, loading, success, mybooking } = useSelector(state => state.listMyBooking)
  const { error: bookingError, success: bookingSuccess, loading: bookingLoading, booking } = useSelector(state => state.listBooking)
  const dispatch = useDispatch();
  const { employee, user } = useSelector(state => state.userData)
  useEffect(() => {
    const fetchData = async () => {

      if (user?.employee ) {
        if(!bookingSuccess)
        {await dispatch(listBooking());}
      }

      else if (user?.user) {
        if(!success){
          await dispatch(listMyBooking());
        }
      }

      else {
        return <h1>User not found</h1>
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  if (loading || bookingLoading) return <ElementLoader />

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
