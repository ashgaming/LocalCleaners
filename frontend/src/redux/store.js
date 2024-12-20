import { createStore, applyMiddleware } from 'redux';
import CombineReducers from './combineReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import {thunk} from 'redux-thunk';


const initialState = {
  userData: localStorage.getItem('token')? JSON.parse(localStorage.getItem('token')) : {
    user: [],
        loading: false,
        error: null,
        success: false,
  }
}

const middleware = [thunk]

const store = createStore(CombineReducers, initialState,
    composeWithDevTools(applyMiddleware(...middleware),
    ))

// during production
/*const store = createStore(CombineReducers, initialState,
    applyMiddleware(...middleware))*/

export default store;