import requestAPI from '../services/triviaAPI';

export const ACTION_USER = 'ACTION_USER';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAIL = 'REQUEST_API_FAIL';

export const actionUser = (nome) => ({
  type: ACTION_USER,
  nome,
});

export const actionRequestApi = () => ({
  type: REQUEST_API,
});

export const actionRequestApiSuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});

export const actionRequestApiFail = (error) => ({
  type: REQUEST_API_FAIL,
  error,
});

export const requestApiThunk = () => (dispatch) => {
  dispatch(actionRequestApi());
  return requestAPI()
    .then((data) => {
      localStorage.setItem('token', data.token);
      dispatch(actionRequestApiSuccess(data));
    })
    .catch((error) => dispatch(actionRequestApiFail(error)));
};
