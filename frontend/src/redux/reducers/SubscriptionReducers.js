import {
  SET_ERROR, SET_LOADING, SET_MONTHS, SET_SELECTED_PLAN,
  CREATE_SUBSCRIPTION_RESET,
  CREATE_SUBSCRIPTION_ERROR,
  CREATE_SUBSCRIPTION_REQUEST,
  CREATE_SUBSCRIPTION_SUCCESS,

  GET_SUBSCRIPTION_RESET,
  GET_SUBSCRIPTION_ERROR,
  GET_SUBSCRIPTION_REQUEST,
  GET_SUBSCRIPTION_SUCCESS,

  GET_SUBSCRIPTION_PLAN_RESET,
  GET_SUBSCRIPTION_PLAN_ERROR,
  GET_SUBSCRIPTION_PLAN_REQUEST,
  GET_SUBSCRIPTION_PLAN_SUCCESS,

  CREATE_SUBSCRIPTION_PLANS_RESET,
  CREATE_SUBSCRIPTION_PLANS_ERROR,
  CREATE_SUBSCRIPTION_PLANS_REQUEST,
  CREATE_SUBSCRIPTION_PLANS_SUCCESS,

  SET_EMAIL,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_CODE,
  SET_PINCODE,
  SET_PHONE,
  SET_STREET,
  SET_HOUSE,
  SET_CITY,
  SET_STATE,

} from "../constants/SubscriptionConstants";

export const subscriptionReducer = (state = {
  selectedPlan: null,
  loading: false,
  error: null,
}, action) => {
  switch (action.type) {
    case SET_SELECTED_PLAN:
      return { ...state, selectedPlan: action.payload };
    case SET_MONTHS:
      return { ...state, months: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_FIRSTNAME:
      return { ...state, firstname: action.payload };
    case SET_LASTNAME:
      return { ...state, lastname: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_CODE:
      return { ...state, countryCode: action.payload };
    case SET_PHONE:
      return { ...state, phoneNumber: action.payload };
    case SET_STREET:
      return { ...state, street: action.payload };
    case SET_HOUSE:
      return { ...state, house: action.payload };
    case SET_CITY:
      return { ...state, city: action.payload };
    case SET_STATE:
      return { ...state, state: action.payload };
    case SET_PINCODE:
      return { ...state, pincode: action.payload };
    default:
      return state;
  }
};

export const createSubscriptionReducer = (state =
  {
    subscription: [],
    loading: false,
    error: null,
    success: false,
  }
  , action) => {
  switch (action.type) {
    case CREATE_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        subscription: [],
        loading: true,
        error: null,
        success: false,
      };
    case CREATE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        subscription: action.payload,
        success: true,
        error: null,
      };
    case CREATE_SUBSCRIPTION_ERROR:
      return {
        ...state,
        subscription: [],
        loading: false,
        success: false,
        error: action.payload,
      };
    case CREATE_SUBSCRIPTION_RESET:
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

export const getSubscriptionReducer = (state =
  {
    subscription: [],
    loading: false,
    error: null,
    success: false,
  }
  , action) => {
  switch (action.type) {
    case GET_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        subscription: [],
        loading: true,
        error: null,
        success: false,
      };
    case GET_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        subscription: action.payload,
        success: true,
        error: null,
      };
    case GET_SUBSCRIPTION_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        subscription: [],
        error: action.payload,
      };
    case GET_SUBSCRIPTION_RESET:
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

export const getSubscriptionPlanReducer = (state =
  {
    subscription: [],
    loading: false,
    error: null,
    success: false,
  }
  , action) => {
  switch (action.type) {
    case GET_SUBSCRIPTION_PLAN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case GET_SUBSCRIPTION_PLAN_SUCCESS:
      return {
        ...state,
        loading: false,
        subscription: action.payload,
        success: true,
        error: null,
      };
    case GET_SUBSCRIPTION_PLAN_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case GET_SUBSCRIPTION_PLAN_RESET:
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

export const createSubscriptionPlansReducer = (state =
  {
    plans: [],
    loading: false,
    error: null,
    success: false,
  }
  , action) => {
  switch (action.type) {
    case CREATE_SUBSCRIPTION_PLANS_REQUEST:
      return {
        ...state,
        plans: [],
        loading: true,
        error: null,
        success: false,
      };
    case CREATE_SUBSCRIPTION_PLANS_SUCCESS:
      return {
        ...state,
        loading: false,
        plans: action.payload,
        success: true,
      };
    case CREATE_SUBSCRIPTION_PLANS_ERROR:
      return {
        ...state,
        plans: [],
        loading: false,
        success: false,
        error: action.payload,
      };
    case CREATE_SUBSCRIPTION_PLANS_RESET:
      return {
        plans: [],
        loading: false,
        error: null,
        success: false,
      };
    default:
      return state;
  }
};
