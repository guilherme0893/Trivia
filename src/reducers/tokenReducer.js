import {
  REQUEST_TOKEN_SUCCESS,
  // REQUEST_API_FAIL,
} from '../actions/index';

const INITIAL_STATE = {
  token: '',
  // error: '',
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_TOKEN_SUCCESS:
    // localStorage.setItem('token', JSON.stringify(action.token));
    return {
      ...state,
      token: action.token,
    };
  // case REQUEST_API_FAIL:
  //   return {
  //     ...state,
  //     error: 'Fetch API failed!',
  //   };
  default:
    return state;
  }
};

export default tokenReducer;
