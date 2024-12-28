import {
    CREATE_BOOKING_REQUEST,
    CREATE_BOOKING_SUCCESS,
    CREATE_BOOKING_ERROR,
    CREATE_BOOKING_RESET,

    LIST_BOOKING_REQUEST,
    LIST_BOOKING_SUCCESS,
    LIST_BOOKING_ERROR,
    LIST_BOOKING_RESET,

    LIST_PENDING_BOOKING_REQUEST,
    LIST_PENDING_BOOKING_SUCCESS,
    LIST_PENDING_BOOKING_ERROR,
    LIST_PENDING_BOOKING_RESET,

    LIST_MY_BOOKING_REQUEST,
    LIST_MY_BOOKING_SUCCESS,
    LIST_MY_BOOKING_ERROR,
    LIST_MY_BOOKING_RESET,

    DELETE_BOOKING_REQUEST,
    DELETE_BOOKING_SUCCESS,
    DELETE_BOOKING_RESET,
    DELETE_BOOKING_ERROR,

    LIST_AVA_EMP_REQUEST,
    LIST_AVA_EMP_SUCCESS,
    LIST_AVA_EMP_ERROR,
    LIST_AVA_EMP_RESET,


} from '../constants/BookingConstants'


export const createBookingReducer = (state =
    {
        booking: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case CREATE_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case CREATE_BOOKING_SUCCESS:
            return {
                ...state,
                loading: false,
                booking: action.payload,
                success: true,
            };
        case CREATE_BOOKING_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };
        case CREATE_BOOKING_RESET:
            return {
                booking: [],
                loading: false,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};

export const deleteBookingReducer = (state =
    {
        booking: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case DELETE_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case DELETE_BOOKING_SUCCESS:
            return {
                ...state,
                loading: false,
                booking: action.payload,
                success: true,
            };
        case DELETE_BOOKING_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };
        case DELETE_BOOKING_RESET:
            return {
                booking: [],
                loading: false,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};

export const listBookingReducer = (state =
    {
        booking: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case LIST_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case LIST_BOOKING_SUCCESS:
            return {
                ...state,
                loading: false,
                booking: action.payload,
                success: true,
            };
        case LIST_BOOKING_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };
        case LIST_BOOKING_RESET:
            return {
                booking: [],
                loading: false,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};

export const listMyBookingReducer = (state =
    {
        mybooking: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case LIST_MY_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case LIST_MY_BOOKING_SUCCESS:
            return {
                ...state,
                loading: false,
                mybooking: action.payload,
                success: true,
            };
        case LIST_MY_BOOKING_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: [...action.payload],
            };
        case LIST_MY_BOOKING_RESET:
            return {
                mybooking: [],
                loading: false,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};

export const listPendingBookingReducer = (state =
    {
        pending: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case LIST_PENDING_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case LIST_PENDING_BOOKING_SUCCESS:
            return {
                ...state,
                loading: false,
                pending: action.payload,
                success: true,
            };
        case LIST_PENDING_BOOKING_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: [...action.payload],
            };
        case LIST_PENDING_BOOKING_RESET:
            return {
                pending: [],
                loading: false,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};


export const listAvalableEmployesReducer = (state =
    {
        employes: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case LIST_AVA_EMP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case LIST_AVA_EMP_SUCCESS:
            return {
                ...state,
                loading: false,
                employes: action.payload.employes,
                success: true,
            };
        case LIST_AVA_EMP_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: [...action.payload],
            };
        case LIST_AVA_EMP_RESET:
            return {
                employes: [],
                loading: false,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};