import { combineReducers } from "redux";
import { userDataReducer, userLoginReducer, userRegisterReducer , createEmployeeReducer } from "./reducers/UserReducers";
import { createBookingReducer, deleteBookingReducer, listAvalableEmployesReducer, listBookingReducer, listMyBookingReducer, listPendingBookingReducer } from "./reducers/BookingReducer";
import { createSubscriptionPlansReducer, createSubscriptionReducer, getSubscriptionPlanReducer, getSubscriptionReducer, subscriptionReducer } from "./reducers/SubscriptionReducers";

const CombineReducers = combineReducers({
    userLogin:userLoginReducer,
    userData:userDataReducer,
    userRegister:userRegisterReducer,

    createEmployee:createEmployeeReducer,

    createBooking:createBookingReducer,
    deleteBooking:deleteBookingReducer,
    listBooking : listBookingReducer,
    listMyBooking : listMyBookingReducer,
    listPendingBooking:listPendingBookingReducer,
    listAvalableEmployes:listAvalableEmployesReducer,

    subscriptionInfo:subscriptionReducer,
    getSubscriptionPlan:getSubscriptionPlanReducer,
    createSubscription:createSubscriptionReducer,
    getSubscription:getSubscriptionReducer,
    createSubscriptionPlans:createSubscriptionPlansReducer,
    

});

export default CombineReducers;