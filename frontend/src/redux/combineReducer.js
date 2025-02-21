import { combineReducers } from "redux";
import { userDataReducer, userLoginReducer, userRegisterReducer , createEmployeeReducer, avalabityCheckReducer } from "./reducers/UserReducers";
import { createBookingReducer, deleteBookingReducer, listAvalableEmployesReducer, listBookingReducer, listMyBookingReducer, listPendingBookingReducer } from "./reducers/BookingReducer";
import { createSubscriptionPlansReducer, createSubscriptionReducer, getSubscriptionPlanReducer, getSubscriptionReducer, subscriptionReducer } from "./reducers/SubscriptionReducers";
import { dashboardReducer, getEmployeeAdminReducer, getEmployeesAdminReducer, getFeedBacksAdminReducer, getUsersAdminReducer } from "./reducers/AdminReducer";
import { completePaySubCashReducer, getStaffToPaySubCashReducer } from "./reducers/paymentReducer";
import { createPostReducer, getPostReducer, getPostsReducer } from "./reducers/PostReducer";


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

    getStaffToPaySubCash:getStaffToPaySubCashReducer,
    completePaySubCash:completePaySubCashReducer,

    avalabityCheck:avalabityCheckReducer,

    createPosts:createPostReducer,
    getPosts:getPostsReducer,
    getPost:getPostReducer,
    
});

export default CombineReducers;