import { 
  GET_USERS_ADMIN_REQUEST,
  GET_USERS_ADMIN_SUCCESS,
  GET_USERS_ADMIN_ERROR ,
  GET_USERS_ADMIN_RESET ,

  GET_USER_ADMIN_REQUEST, 
  GET_USER_ADMIN_SUCCESS, 
  GET_USER_ADMIN_ERROR,   
  GET_USER_ADMIN_RESET,   

  GET_EMPLOYEES_ADMIN_REQUEST,
  GET_EMPLOYEES_ADMIN_SUCCESS,
  GET_EMPLOYEES_ADMIN_ERROR,    
  GET_EMPLOYEES_ADMIN_RESET, 

  GET_EMPLOYEE_ADMIN_REQUEST, 
  GET_EMPLOYEE_ADMIN_SUCCESS, 
  GET_EMPLOYEE_ADMIN_ERROR,   
  GET_EMPLOYEE_ADMIN_RESET,   

  GET_FEEDBACKS_ADMIN_REQUEST,
  GET_FEEDBACKS_ADMIN_SUCCESS,
  GET_FEEDBACKS_ADMIN_ERROR,    
  GET_FEEDBACKS_ADMIN_RESET, 
} from "../constants/AdminConstants"


const initialState = {
  analytics: {
    totalUsers: 1250,
    totalServices: 8,
    activeStaff: 45,
    totalGroups: 12,
    totalSales: 458750,
    repeatCustomerRate: 68,
  },
  services: [
    { id: '1', name: 'Cloud Storage', status: 'active', users: 450 },
    { id: '2', name: 'Email Service', status: 'active', users: 890 },
    { id: '3', name: 'Database', status: 'maintenance', users: 230 },
  ],
  users: [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'User', lastActive: '2024-03-10' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', lastActive: '2024-03-11' },
    { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'User', lastActive: '2024-03-09' },
  ],
  staff: [
    { id: '1', name: 'Sarah Wilson', position: 'Team Lead', salary: '1868', lastpay: '2024-03-10' },
    { id: '2', name: 'Tom Brown', position: 'Developer', salary: '861861', lastpay: '2024-03-10' },
    { id: '3', name: 'Lisa Chen', position: 'Designer', salary: '1531', lastpay: '2024-03-10' },
  ],
  groups: [
    { id: '1', name: 'Engineering', members: 15, created: '2024-01-15' },
    { id: '2', name: 'Design', members: 8, created: '2024-01-20' },
    { id: '3', name: 'Marketing', members: 12, created: '2024-02-01' },
  ],
};

export const dashboardReducer = (state =
  initialState
  , action) => {
  switch (action.type) {
    /*    case USER_DATA_REQUEST:
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
            };*/
    default:
      return state;
  }
};

export const getUsersAdminReducer = (state = { users: [], loading: false, error: null, success: false, }, action) => {
  switch (action.type) {
    case GET_USERS_ADMIN_REQUEST:
      return { ...state, loading: true, error: null, success: false };
    case GET_USERS_ADMIN_SUCCESS:
      return { ...state, loading: false, users: action.payload, success: true };
    case GET_USERS_ADMIN_ERROR:
      return { ...state, loading: false, success: false, error: action.payload };
    case GET_USERS_ADMIN_RESET:
      return { users: [], loading: false, error: null, success: false };
    default:
      return state;
  }
};

export const getUserAdminReducer = (state = { user: [], loading: false, error: null, success: false }, action) => {
  switch (action.type) {
    case GET_USER_ADMIN_REQUEST:
      return { ...state, loading: true, error: null, success: false, };
    case GET_USER_ADMIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, success: true };
    case GET_USER_ADMIN_ERROR:
      return { ...state, loading: false, success: false, error: action.payload };
    case GET_USER_ADMIN_RESET:
      return { user: [], loading: false, error: null, success: false };
    default:
      return state;
  }
};

export const getEmployeesAdminReducer = (state = { employees: [], loading: false, error: null, success: false, }, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_ADMIN_REQUEST:
      return { ...state, loading: true, error: null, success: false };
    case GET_EMPLOYEES_ADMIN_SUCCESS:
      return { ...state, loading: false, employees: action.payload, success: true };
    case GET_EMPLOYEES_ADMIN_ERROR:
      return { ...state, loading: false, success: false, error: action.payload };
    case GET_EMPLOYEES_ADMIN_RESET:
      return { employees: [], loading: false, error: null, success: false };
    default:
      return state;
  }
};

export const getEmployeeAdminReducer = (state = { employee: [], loading: false, error: null, success: false }, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_ADMIN_REQUEST:
      return { ...state, loading: true, error: null, success: false, };
    case GET_EMPLOYEE_ADMIN_SUCCESS:
      return { ...state, loading: false, employee: action.payload, success: true };
    case GET_EMPLOYEE_ADMIN_ERROR:
      return { ...state, loading: false, success: false, error: action.payload };
    case GET_EMPLOYEE_ADMIN_RESET:
      return { employee: [], loading: false, error: null, success: false };
    default:
      return state;
  }
};

export const getFeedBacksAdminReducer = (state = { feedbacks: [], loading: false, error: null, success: false }, action) => {
  switch (action.type) {
    case GET_FEEDBACKS_ADMIN_REQUEST:
      return { ...state, loading: true, error: null, success: false, };
    case GET_FEEDBACKS_ADMIN_SUCCESS:
      return { ...state, loading: false, feedbacks: action.payload, success: true };
    case GET_FEEDBACKS_ADMIN_ERROR:
      return { ...state, loading: false, success: false, error: action.payload };
    case GET_FEEDBACKS_ADMIN_RESET:
      return { feedbacks: [], loading: false, error: null, success: false };
    default:
      return state;
  }
};