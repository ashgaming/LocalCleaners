import { combineReducers } from "redux";
import { userDataReducer, userLoginReducer, userRegisterReducer , createEmployeeReducer } from "./reducers/UserReducers";
import { createBookingReducer, deleteBookingReducer, listBookingReducer, listMyBookingReducer } from "./reducers/BookingReducer";

const CombineReducers = combineReducers({
    userLogin:userLoginReducer,
    userData:userDataReducer,
    userRegister:userRegisterReducer,

    createEmployee:createEmployeeReducer,

    createBooking:createBookingReducer,
    deleteBooking:deleteBookingReducer,
    listBooking : listBookingReducer,
    listMyBooking : listMyBookingReducer,

});

export default CombineReducers;