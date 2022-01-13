const INITIAL_STATE = {
  name: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ACTION_USER':
    return {
      ...state,
      name: action.name,
    };
  default:
    return state;
  }
};

export default user;
