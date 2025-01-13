import { USER_DATA_ERROR, USER_DATA_REQUEST, USER_DATA_RESET, USER_DATA_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_RESET, USER_REGISTER_ERROR, USER_REGISTER_REQUEST, USER_REGISTER_RESET, USER_REGISTER_SUCCESS, CREATE_EMPLOYEE_REQUEST, CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE_ERROR, CREATE_EMPLOYEE_RESET } from '../constants/UserConstants';

export const userLoginReducer = (state =
    {
        user: [],
        loading: false,
        error: null,
        success: false
    }
    , action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                token: action.payload.token,
                success: true
            };
        case USER_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false
            };

        case USER_LOGIN_RESET:
            return {
                loading: false,
                error: action.payload,
                success: false,
                token: null,
                user: []
            };
        default:
            return state;
    }
};

export const userRegisterReducer = (state =
    {
        user: [],
        loading: false,
        error: null,
    }
    , action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: null,
            };
            case USER_REGISTER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    user: action.payload,
                    success: true,
                };
                case USER_REGISTER_ERROR:
                    return {
                        ...state,
                        loading: false,
                        error: action.payload,
                        success: false,
                    };
                    case USER_REGISTER_RESET:
                        return {
                            ...state,
                            user: [],
                            loading: false,
                            success: false,
                error: null,
            };
        default:
            return state;
    }
};

export const userDataReducer = (state =
    {
        user: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case USER_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case USER_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                success: true,
            };
        case USER_DATA_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };
        case USER_DATA_RESET:
            return {
                user: [],
                loading: false,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};


export const createEmployeeReducer = (state =
    {
        success: false,
        loading: false,
        error: null,
        profile: []
    }
    , action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case CREATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                profile: action.payload,
            };
        case CREATE_EMPLOYEE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CREATE_EMPLOYEE_RESET:
            return {
                ...state,
                profile: [],
                loading: false,
                error: null,
                success: false
            };
        default:
            return state;
    }
};