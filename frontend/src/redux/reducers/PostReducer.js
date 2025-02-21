import { CREATE_POST_ERROR, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_POST_ERROR, GET_POST_REQUEST, GET_POST_SUCCESS, GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "../constants/PostConstants";



export const createPostReducer = (state =
    {
        posts: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case CREATE_POST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                booking: action.payload,
                success: true,
            };
        case CREATE_POST_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getPostsReducer = (state =
    {
        posts: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                success: true,
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getPostReducer = (state =
    {
        post: [],
        loading: false,
        error: null,
        success: false,
    }
    , action) => {
    switch (action.type) {
        case GET_POST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: false,
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload,
                success: true,
            };
        case GET_POST_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
