import requestAPI from '../services/triviaAPI';

export const ACTION_NAME = 'ACTION_NAME';
export const ACTION_EMAIL = 'ACTION_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAIL = 'REQUEST_API_FAIL';

export const actionName = (name) => ({
  type: ACTION_NAME,
  name,
});

export const actionEmail = (email) => ({
  type: ACTION_EMAIL,
  email,
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
