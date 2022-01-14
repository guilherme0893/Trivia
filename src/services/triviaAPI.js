const requestURL = 'https://opentdb.com/api_token.php?command=request';

const requestAPI = () => fetch(requestURL)
  .then((response) => response.json())
  .then((data) => data);

export default requestAPI;
