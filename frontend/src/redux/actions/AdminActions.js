import axios from "axios";
import { 

    GET_USERS_ADMIN_REQUEST,
    GET_USERS_ADMIN_SUCCESS,
    GET_USERS_ADMIN_ERROR ,
  
    GET_USER_ADMIN_REQUEST, 
    GET_USER_ADMIN_SUCCESS, 
    GET_USER_ADMIN_ERROR,   
  
    GET_EMPLOYEES_ADMIN_REQUEST,
    GET_EMPLOYEES_ADMIN_SUCCESS,
    GET_EMPLOYEES_ADMIN_ERROR,    
  
    GET_EMPLOYEE_ADMIN_REQUEST, 
    GET_EMPLOYEE_ADMIN_SUCCESS, 
    GET_EMPLOYEE_ADMIN_ERROR,   
    
    GET_FEEDBACKS_ADMIN_REQUEST, 
    GET_FEEDBACKS_ADMIN_SUCCESS, 
    GET_FEEDBACKS_ADMIN_ERROR,   
  } from "../constants/AdminConstants"

  import { 
      CREATE_SUBSCRIPTION_PLANS_REQUEST,
      CREATE_SUBSCRIPTION_PLANS_SUCCESS,
      CREATE_SUBSCRIPTION_PLANS_ERROR,

      GET_SUBSCRIPTION_PLAN_REQUEST,
      GET_SUBSCRIPTION_PLAN_SUCCESS,
      GET_SUBSCRIPTION_PLAN_ERROR,

   } from "../constants/SubscriptionConstants";
import { token } from "../constants/RequiedConstant";
import { BACKEND_URL } from "./UserActions";

export const  GetUsersAdmin = () => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))?.token || null;
    try {
        dispatch({
            type:  GET_USERS_ADMIN_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/admin/users`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })

        dispatch({
            type:  GET_USERS_ADMIN_SUCCESS,
            payload: data.users
        })
    }
    catch (error) {
        dispatch({
            type:  GET_USERS_ADMIN_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const  GetUserAdmin = ({_id}) => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))?.token || null;
    try {
        dispatch({
            type:  GET_USER_ADMIN_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/admin/user`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                },
                params:{
                    _id
                }
            })

        dispatch({
            type:  GET_USER_ADMIN_SUCCESS,
            payload: data.user
        })
    }
    catch (error) {
        dispatch({
            type:  GET_USER_ADMIN_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const  GetEmployeesAdmin = () => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))?.token || null;
    try {
        dispatch({
            type:  GET_EMPLOYEES_ADMIN_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/admin/employees`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })

        dispatch({
            type:  GET_EMPLOYEES_ADMIN_SUCCESS,
            payload: data.employee
        })
    }
    catch (error) {
        dispatch({
            type:  GET_EMPLOYEES_ADMIN_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const  GetEmployeeAdmin = ({_id}) => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))?.token || null;
    try {
        dispatch({
            type:  GET_EMPLOYEE_ADMIN_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/admin/employee`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                },
                params:{
                    _id
                }
            })

        dispatch({
            type:  GET_EMPLOYEE_ADMIN_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type:  GET_EMPLOYEE_ADMIN_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getSubscriptionPlan = () => async (dispatch) => {

    try {
        dispatch({
            type: GET_SUBSCRIPTION_PLAN_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/plans/`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })

        dispatch({
            type: GET_SUBSCRIPTION_PLAN_SUCCESS,
            payload: data.plans
        })

        const date = new Date()


        localStorage.setItem('SUBSCRIPTION_PLAN_LIST', JSON.stringify({ date: date.toLocaleDateString(), plans: data.plans }))

    }
    catch (error) {
        console.log('list SUBSCRIPTION', error)
        dispatch({
            type: GET_SUBSCRIPTION_PLAN_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const createSubscriptionPlans = (fdata) => async (dispatch,navigate) => {

    try {
        dispatch({
            type: CREATE_SUBSCRIPTION_PLANS_REQUEST
        })


        const { data } = await axios.post(`${BACKEND_URL}/plans/create`,
            fdata,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })

        dispatch({
            type: CREATE_SUBSCRIPTION_PLANS_SUCCESS,
            payload: data
        })

        const oldData = JSON.parse(localStorage.getItem('SUBSCRIPTION_PLAN_LIST')) || []
        console.log(oldData)
        const addedData = [
            ...oldData.plans,
            data.plans
        ]

        dispatch({
            type: GET_SUBSCRIPTION_PLAN_SUCCESS,
            payload: addedData
        })

    }
    catch (error) {
        console.log('create SUBSCRIPTION plans error', error)
        dispatch({
            type: CREATE_SUBSCRIPTION_PLANS_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const  GetFeedbacksAdmin = () => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))?.token || null;
    try {
        dispatch({
            type:  GET_FEEDBACKS_ADMIN_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/admin/feedbacks`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                },
            })

        dispatch({
            type:  GET_FEEDBACKS_ADMIN_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type:  GET_FEEDBACKS_ADMIN_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}