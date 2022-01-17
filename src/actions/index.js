import requestAPI from '../services/triviaAPI';

// export const ACTION_NAME = 'ACTION_NAME';
// export const ACTION_EMAIL = 'ACTION_EMAIL';
export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const REQUEST_TOKEN_FAIL = 'REQUEST_TOKEN_FAIL';
export const GET_INFOS = 'GET_INFOS';

// export const actionName = (name) => ({
//   type: ACTION_NAME,
//   name,
// });

// export const actionEmail = (email) => ({
//   type: ACTION_EMAIL,
//   email,
// });

export const userEmailInfos = (userEmailInfo) => ({
  type: GET_INFOS,
  userEmailInfo,
});

const actionRequestTokenSuccess = (token) => ({
  type: REQUEST_TOKEN_SUCCESS,
  token,
});

export const actionRequestTokenFail = (error) => ({
  type: REQUEST_TOKEN_FAIL,
  error: console.error(error),
});

export const requestTokenThunk = () => (dispatch) => {
  requestAPI()
    .then((data) => {
      // console.log(data);
      // o problema estava aqui: data é um objeto, e token é ele desestruturado!
      const { token } = data;
      // console.log(token);
      localStorage.setItem('token', JSON.stringify(token));
      return dispatch(actionRequestTokenSuccess(token));
    })
    .catch((error) => console.error(error));
};
