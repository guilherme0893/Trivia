// import { combineReducers } from 'redux';
// import user from './user';
// import tokenReducer from './token';
import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAIL,
} from '../actions/index';

const INITIAL_STATE = {
  token: '',
  error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      token: action.payload.token,
    };
  case REQUEST_API_FAIL:
    return {
      ...state,
      error: 'Fetch API failed!',
    };
  default:
    return state;
  }
};

// const rootReducer = combineReducers({ user, tokenReducer });

export default reducer;
