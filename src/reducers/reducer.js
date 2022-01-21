import {
  GET_INFOS,
  REQUEST_TOKEN,
  GET_QUESTIONS,
  FINISH_TIMER,
  GET_SCORE,
} from '../actions';

const INITIAL_STATE = {
  player: {
    name: '',
    email: '',
    score: 0,
    assertions: 0,
  },
  token: '',
  questions: [],
  timerFinish: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_TOKEN:
    return {
      ...state,
      token: action.token,
    };
  case GET_QUESTIONS:
    return {
      ...state,
      questions: action.questions,
    };
  case GET_INFOS:
    return {
      ...state,
      player: {
        ...state.player,
        ...action.player,
      },
    };
  case FINISH_TIMER:
    return {
      ...state,
      timerFinish: true,
    };
  case GET_SCORE:
    return {
      ...state,
      player: {
        ...state.player,
        score: action.score,
        assertions: action.assertions,
      },
    };
  default:
    return state;
  }
};

export default reducer;
