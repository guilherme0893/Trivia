import { GET_INFOS, REQUEST_TOKEN_SUCCESS } from '../actions';

const INITIAL_STATE = {
  token: '',
  player: {
    name: '',
    email: '',
    score: 0,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_INFOS:
    return {
      ...state,
      player: {
        ...state.player,
        ...action.userEmailInfo,
      },
    };
  case REQUEST_TOKEN_SUCCESS:
    // localStorage.setItem('token', JSON.stringify(action.token));
    return {
      ...state,
      token: action.token,
    };
  // case 'ACTION_EMAIL':
  //   return {
  //     ...state,
  //     email: action.email,
  //   };
  default:
    return state;
  }
};

// export default userReducer;
