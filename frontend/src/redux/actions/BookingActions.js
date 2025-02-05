import axios from 'axios';
import {
    CREATE_BOOKING_REQUEST,
    CREATE_BOOKING_SUCCESS,
    CREATE_BOOKING_ERROR,

    LIST_BOOKING_REQUEST,
    LIST_BOOKING_SUCCESS,
    LIST_BOOKING_ERROR,
   // LIST_BOOKING_RESET,


    LIST_PENDING_BOOKING_REQUEST,
    LIST_PENDING_BOOKING_SUCCESS,
    LIST_PENDING_BOOKING_ERROR,
 //   LIST_PENDING_BOOKING_RESET,

    LIST_MY_BOOKING_REQUEST,
    LIST_MY_BOOKING_SUCCESS,
    LIST_MY_BOOKING_ERROR,
//    LIST_MY_BOOKING_RESET,

//   DELETE_BOOKING_REQUEST,
//   DELETE_BOOKING_SUCCESS,
//   DELETE_BOOKING_RESET,
//   DELETE_BOOKING_ERROR,

    LIST_AVA_EMP_REQUEST,
    LIST_AVA_EMP_SUCCESS,
    LIST_AVA_EMP_ERROR,
//    LIST_AVA_EMP_RESET,

} from '../constants/BookingConstants'
import { BACKEND_URL } from './UserActions';

const token = JSON.parse(localStorage.getItem('token'))?.token || null;

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

export const listMyBooking = (fdata) => async (dispatch) => {

    try {
        dispatch({
            type: LIST_MY_BOOKING_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/bookings/user-booking-list`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })


        dispatch({
            type: LIST_MY_BOOKING_SUCCESS,
            payload: data
        })

        const date = new Date()


        localStorage.setItem('mybooking', JSON.stringify({ date: date.toLocaleDateString(), mybooking: data }))

    }
    catch (error) {
        dispatch({
            type: LIST_MY_BOOKING_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const listPendingBooking = () => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))?.token || null;
    try {
        dispatch({
            type: LIST_PENDING_BOOKING_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/bookings/list-pending`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })


        dispatch({
            type: LIST_PENDING_BOOKING_SUCCESS,
            payload: data
        })

        //    const date = new Date()


        //   localStorage.setItem('mybooking',JSON.stringify({date:date.toLocaleDateString(),mybooking:data}))

    }
    catch (error) {
        dispatch({
            type: LIST_PENDING_BOOKING_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getAvalableEmployes = () => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))?.token || null;
    try {
        dispatch({
            type: LIST_AVA_EMP_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/employes/get-employee-list`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })


        dispatch({
            type: LIST_AVA_EMP_SUCCESS,
            payload: data
        })

        //    const date = new Date()


        //   localStorage.setItem('mybooking',JSON.stringify({date:date.toLocaleDateString(),mybooking:data}))

    }
    catch (error) {
        dispatch({
            type: LIST_AVA_EMP_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const listBooking = () => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))?.token || null;
    try {
        dispatch({
            type: LIST_BOOKING_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/bookings/list-bookings-Employee`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })

        dispatch({
            type: LIST_BOOKING_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: LIST_BOOKING_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}