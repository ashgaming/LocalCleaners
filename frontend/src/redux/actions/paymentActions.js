import axios from 'axios';
import {
    GET_STAFF_TO_PAY_SUB_CASH_ERROR,
    GET_STAFF_TO_PAY_SUB_CASH_REQUEST,
    GET_STAFF_TO_PAY_SUB_CASH_RESET,
    GET_STAFF_TO_PAY_SUB_CASH_SUCCESS,

    COMPLETE_PAY_SUB_CASH_ERROR,
    COMPLETE_PAY_SUB_CASH_REQUEST,
    COMPLETE_PAY_SUB_CASH_RESET,
    COMPLETE_PAY_SUB_CASH_SUCCESS,
 } from '../constants/paymentConstants'
import { BACKEND_URL } from './UserActions';

export const  GetStaffToPaySubCash = (email,subId) => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))?.token || null;
    try {
        dispatch({
            type:  GET_STAFF_TO_PAY_SUB_CASH_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/payment/send-notification-cash`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                },
                params:{
                    email,
                    subId
                }
            })

        dispatch({
            type:  GET_STAFF_TO_PAY_SUB_CASH_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type:  GET_STAFF_TO_PAY_SUB_CASH_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const  CompletePaySubCash = ( otp,subId,amount) => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))?.token || null;
    try {
        dispatch({
            type:  COMPLETE_PAY_SUB_CASH_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/payment/subscription/receive-cash-payment`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                },
                params:{
                    otp,
                    subId,
                    amount,
                }
            })

        dispatch({
            type:  COMPLETE_PAY_SUB_CASH_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type:  COMPLETE_PAY_SUB_CASH_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}