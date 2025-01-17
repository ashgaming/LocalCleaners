import axios from "axios";
import {
    SET_ERROR, SET_LOADING, SET_MONTHS, SET_SELECTED_PLAN,
    CREATE_SUBSCRIPTION_RESET,
    CREATE_SUBSCRIPTION_ERROR,
    CREATE_SUBSCRIPTION_REQUEST,
    CREATE_SUBSCRIPTION_SUCCESS,

    GET_SUBSCRIPTION_RESET,
    GET_SUBSCRIPTION_ERROR,
    GET_SUBSCRIPTION_REQUEST,
    GET_SUBSCRIPTION_SUCCESS,

    SET_LASTNAME,
    SET_FIRSTNAME,
    SET_EMAIL,
    SET_CODE,
    SET_PHONE,
    SET_STREET,
    SET_HOUSE,
    SET_CITY,
    SET_STATE,
    SET_PINCODE,
} from "../constants/SubscriptionConstants";
import { BACKEND_URL } from "./UserActions";
import { token } from "../constants/RequiedConstant";
import { useNavigate } from "react-router-dom";

export const setSelectedPlan = (plan) => ({
    type: SET_SELECTED_PLAN,
    payload: plan,
});

export const setMonths = (months) => ({
    type: SET_MONTHS,
    payload: months,
});

export const setFirstname = (firstname) => ({
    type: SET_FIRSTNAME,
    payload: firstname,
});

export const setLastname = (lastname) => ({
    type: SET_LASTNAME,
    payload: lastname,
});

export const setEmail = (email) => ({
    type: SET_EMAIL,
    payload: email,
});

export const setCountryCode = (ccode) => ({
    type: SET_CODE,
    payload: ccode,
});

export const setPhoneNumber = (number) => ({
    type: SET_PHONE,
    payload: number,
});

export const setStreet = (value) => ({
    type: SET_STREET,
    payload: value,
});

export const setHouse = (value) => ({
    type: SET_HOUSE,
    payload: value,
});

export const setCity = (value) => ({
    type: SET_CITY,
    payload: value,
});

export const setState = (value) => ({
    type: SET_STATE,
    payload: value,
});

export const setPincode = (value) => ({
    type: SET_PINCODE,
    payload: value,
});

export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});


export const createSubscription = (fdata) => async (dispatch,navigate) => {

    try {

        dispatch({
            type: CREATE_SUBSCRIPTION_RESET
        })

        dispatch({
            type: CREATE_SUBSCRIPTION_REQUEST
        })
        

        const { data } = await axios.post(`${BACKEND_URL}/subscriptions/create`,
            fdata,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })

        dispatch({
            type: CREATE_SUBSCRIPTION_SUCCESS,
            payload: data.subscription
        })


        navigate('/checkout');
    }
    catch (error) {
        console.log('create SUBSCRIPTION error', error)
        dispatch({
            type: CREATE_SUBSCRIPTION_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getSubscription = () => async (dispatch) => {

    try {
        dispatch({
            type: GET_SUBSCRIPTION_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/subscriptions/list`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })


        dispatch({
            type: GET_SUBSCRIPTION_SUCCESS,
            payload: data.sub
        })

        const date = new Date()


        localStorage.setItem('MY_SUBSCRIPTION_LIST', JSON.stringify({ date: date.toLocaleDateString(), mysubscription: data }))

    }
    catch (error) {
        console.log('list SUBSCRIPTION', error)
        dispatch({
            type: GET_SUBSCRIPTION_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

