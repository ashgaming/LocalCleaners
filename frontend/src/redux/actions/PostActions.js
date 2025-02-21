import { CREATE_POST_ERROR, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_POST_ERROR, GET_POST_REQUEST, GET_POST_SUCCESS, GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "../constants/PostConstants";


export const createPosts = (fdata) => async (dispatch) => {

    try {
        dispatch({
            type: CREATE_POST_REQUEST
        })


        const { data } = await axios.post(`${BACKEND_URL}/posts/create`,
            fdata,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })

        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: data
        })

    }
    catch (error) {
        dispatch({
            type: CREATE_POST_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getPosts = () => async (dispatch) => {

    try {
        dispatch({
            type: GET_POSTS_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/posts`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                }
            })


        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: data
        })

      //  const date = new Date()


     //   localStorage.setItem('mybooking', JSON.stringify({ date: date.toLocaleDateString(), mybooking: data }))

    }
    catch (error) {
        dispatch({
            type: GET_POSTS_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const getPost = (id) => async (dispatch) => {

    try {
        dispatch({
            type: GET_POST_REQUEST
        })


        const { data } = await axios.get(`${BACKEND_URL}/posts/details`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `bearer ${token}`
                },
                params:{
                    _id:id
                }
            })


        dispatch({
            type: GET_POST_SUCCESS,
            payload: data
        })

        const date = new Date()


      //  localStorage.setItem('mybooking', JSON.stringify({ date: date.toLocaleDateString(), mybooking: data }))

    }
    catch (error) {
        dispatch({
            type: GET_POST_ERROR,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}