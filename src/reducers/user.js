const INITIAL_STATE = {
  name: '',
  email: '',
  score: 0,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ACTION_NAME':
    return {
      ...state,
      name: action.name,
    };
  case 'ACTION_EMAIL':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
