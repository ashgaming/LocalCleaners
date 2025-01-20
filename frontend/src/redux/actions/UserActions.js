import { clearUserSession, getUserSession, setUserSession } from '../../helper/HandleData';
import { LIST_MY_BOOKING_RESET } from '../constants/BookingConstants';
import { CREATE_EMPLOYEE_ERROR, CREATE_EMPLOYEE_REQUEST, CREATE_EMPLOYEE_SUCCESS, GET_SERVICE_AVALABLE_ERROR, GET_SERVICE_AVALABLE_REQUEST, GET_SERVICE_AVALABLE_SUCCESS, USER_DATA_ERROR, USER_DATA_REQUEST, USER_DATA_RESET, USER_DATA_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_RESET, USER_LOGIN_SUCCESS, USER_REGISTER_ERROR, USER_REGISTER_REQUEST, USER_REGISTER_RESET, USER_REGISTER_SUCCESS } from '../constants/UserConstants';
import axios from 'axios'

export const BACKEND_URL = process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost:4000'

export const getUserData = (type) => async (dispatch, navigate) => {

    const token = localStorage.getItem('token') ? getUserSession().token : null;
    const endpoints = {
        user: `${BACKEND_URL}/users/profile`,
        employee: `${BACKEND_URL}/employes/profile`,
        admin: `${BACKEND_URL}/admin/profile`,
    };
    try {

        dispatch({
            type: USER_DATA_RESET
        })

        dispatch({
            type: USER_DATA_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `bearer ${token}`
            },
        }

        const { data } = await axios.get(endpoints[type],config)

        console.log('user data', data)

        setUserSession(data)

        const date = new Date()
        dispatch({
            type: USER_DATA_SUCCESS,
            payload: {...data, creatdOn : date.toLocaleDateString()}
        })

    }
    catch (error) {
        dispatch({
            type: USER_DATA_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const userLogin = (type, fdata) => async (dispatch) => {

    try {

        const endpoints = {
            user: `${BACKEND_URL}/users/login`,
            employee: `${BACKEND_URL}/employes/login`,
            admin: `${BACKEND_URL}/admin/login`,
        };

        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(endpoints[type],
            fdata,
            config)
            
        console.log('user login ', data)
       
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        setUserSession(data)

        dispatch(getUserData(type))

       
    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const userRegister = (type, fdata) => async (dispatch) => {
    const endpoints = {
        user: `${BACKEND_URL}/users/register`,
        employee: `${BACKEND_URL}/employes/register`,
        admin: `${BACKEND_URL}/admin/register`,
    };

    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(endpoints[type],
            fdata,
            config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        localStorage.setItem('token', JSON.stringify(data))

        dispatch(getUserData(type))
    }
    catch (error) {
        dispatch({
            type: USER_REGISTER_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const createEmployee = (fdata) => async (dispatch) => {
    const endpoints = {
        emp: `${BACKEND_URL}/employes/register/profile`,
        admin: `${BACKEND_URL}/admin/login`,
    };
    try {
        dispatch({
            type: CREATE_EMPLOYEE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token')).token}`
            }
        }

        const { data } = await axios.post(endpoints['emp'],
            fdata,
            config)


        dispatch(getUserData('employee'))

        dispatch({
            type: CREATE_EMPLOYEE_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: CREATE_EMPLOYEE_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const logoutUser = () => async (dispatch) => {
    dispatch({ type: USER_DATA_RESET })
    dispatch({ type: USER_REGISTER_RESET })
    dispatch({ type: USER_LOGIN_RESET })
    dispatch({type: LIST_MY_BOOKING_RESET})
    clearUserSession();
    localStorage.removeItem('MY_SUBSCRIPTION_LIST');
    localStorage.removeItem('SUBSCRIPTION_PLAN_LIST');
    localStorage.removeItem('activeWork');
    localStorage.removeItem('mybooking');
    localStorage.removeItem('subscriberInfo');
    localStorage.removeItem('userAddress');

    return true;
}



export const searchAvalabityService = (pincode) => async (dispatch, navigate) => {

  //  const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token'))?.token : null;
   
    try {

        dispatch({
            type: GET_SERVICE_AVALABLE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
            params:{
                pincode
            }
        }

        const { data } = await axios.get(`${BACKEND_URL}/employes/service/availability`,
            config)

        dispatch({
            type: GET_SERVICE_AVALABLE_SUCCESS,
            payload: data.result
        })

    }
    catch (error) {
        dispatch({
            type: GET_SERVICE_AVALABLE_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}