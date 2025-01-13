import { combineReducers } from "redux";
import { userDataReducer, userLoginReducer, userRegisterReducer , createEmployeeReducer } from "./reducers/UserReducers";
import { createBookingReducer, deleteBookingReducer, listAvalableEmployesReducer, listBookingReducer, listMyBookingReducer, listPendingBookingReducer } from "./reducers/BookingReducer";
import { createSubscriptionPlansReducer, createSubscriptionReducer, getSubscriptionPlanReducer, getSubscriptionReducer, subscriptionReducer } from "./reducers/SubscriptionReducers";
import { dashboardReducer, getEmployeeAdminReducer, getEmployeesAdminReducer, getFeedBacksAdminReducer, getUsersAdminReducer } from "./reducers/AdminReducer";


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

    dashboard: dashboardReducer,

    getUserAdmin:getUsersAdminReducer , 
    getUsersAdmin : getUsersAdminReducer,
    getEmployeeAdmin : getEmployeeAdminReducer , 
    getEmployeesAdmin : getEmployeesAdminReducer,
    getFeedBacksAdmin : getFeedBacksAdminReducer,
    

});

export default CombineReducers;