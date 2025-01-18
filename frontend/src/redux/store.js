import { createStore, applyMiddleware } from 'redux';
import CombineReducers from './combineReducer';
//import { composeWithDevTools } from 'redux-devtools-extension'
import { thunk } from 'redux-thunk';
import { getUserSession } from '../helper/HandleData';


const subscriptionInfoData = localStorage.getItem('subscriberInfo') ? JSON.parse(localStorage.getItem('subscriberInfo')) : []


const initialState = {
  userData: {
    user: localStorage.getItem('token') ? getUserSession() : [],
    loading: false,
    error: null,
    success: false,
  },

  subscriptionInfo: {
    firstname: subscriptionInfoData?.firstname || '',
    email: subscriptionInfoData?.email || '',
    lastname: subscriptionInfoData?.lastname || '',
    countryCode: subscriptionInfoData?.countryCode || '',
    phoneNumber: subscriptionInfoData?.phoneNumber || '',
    street: subscriptionInfoData?.street || '',
    house: subscriptionInfoData?.house ||'',
    city: subscriptionInfoData?.city || '',
    state: subscriptionInfoData?.state || '',
    pincode: subscriptionInfoData?.pincode || '',
    months: 1,
  }
}

const middleware = [thunk]
/*
const store = createStore(CombineReducers, initialState,
    composeWithDevTools(applyMiddleware(...middleware),
    ))
*/
// during production
/*
*/
const store = createStore(CombineReducers, initialState,
    applyMiddleware(...middleware))

export default store;