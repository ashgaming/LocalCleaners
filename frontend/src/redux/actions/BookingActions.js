import axios from 'axios';
import {
    CREATE_BOOKING_REQUEST,
    CREATE_BOOKING_SUCCESS,
    CREATE_BOOKING_ERROR,

  /*  LIST_BOOKING_REQUEST,
    LIST_BOOKING_SUCCESS,
    LIST_BOOKING_ERROR,
    LIST_BOOKING_RESET,

    LIST_MY_BOOKING_REQUEST,
    LIST_MY_BOOKING_SUCCESS,
    LIST_MY_BOOKING_ERROR,
    LIST_MY_BOOKING_RESET,

    DELETE_BOOKING_REQUEST,
    DELETE_BOOKING_SUCCESS,
    DELETE_BOOKING_RESET,
    DELETE_BOOKING_ERROR,*/

} from '../constants/BookingConstants'
import { BACKEND_URL } from './UserActions';

const token = JSON.parse(localStorage.getItem('token')).token || null;

export const createBooking = (fdata) => async (dispatch) => {

    try {
        dispatch({
            type: CREATE_BOOKING_REQUEST
        })


        const { data } = await axios.post(`${BACKEND_URL}/bookings/create`,
            fdata,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })

        dispatch({
            type: CREATE_BOOKING_SUCCESS,
            payload: data
        })

    }
    catch (error) {
        dispatch({
            type: CREATE_BOOKING_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
