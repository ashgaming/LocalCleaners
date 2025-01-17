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

export const getStaffToPaySubCashReducer = (state =
    {
        staff: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case GET_STAFF_TO_PAY_SUB_CASH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case GET_STAFF_TO_PAY_SUB_CASH_SUCCESS:
            return {
                ...state,
                loading: false,
                staff: action.payload,
                success: true,
            };
        case GET_STAFF_TO_PAY_SUB_CASH_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };
        case GET_STAFF_TO_PAY_SUB_CASH_RESET:
            return {
                staff: [],
                loading: false,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};

export const completePaySubCashReducer = (state =
    {
        subscription: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case COMPLETE_PAY_SUB_CASH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case COMPLETE_PAY_SUB_CASH_SUCCESS:
            return {
                ...state,
                loading: false,
                subscription: action.payload,
                success: true,
            };
        case COMPLETE_PAY_SUB_CASH_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };
        case COMPLETE_PAY_SUB_CASH_RESET:
            return {
                subscription: [],
                loading: false,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};
