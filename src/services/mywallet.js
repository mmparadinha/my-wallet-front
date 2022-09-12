import axios from 'axios';

const URL_BASE = 'http://127.0.0.1:5000';

function postSignUp(registration) {
  const promise = axios.post(`${URL_BASE}/sign-up`, registration);
  return promise;
};

function postLogin(login) {
  const promise = axios.post(`${URL_BASE}/`, login);
  return promise;
};

function Header() {
  const authorization = JSON.parse(localStorage.getItem('mywallet'));
  const config = {
    headers: {
      authorization: `Bearer ${authorization.token}`,
      userid: authorization.userId 
    }
  };
  return config;
};

function getTransactions() {
  const config = Header();
  const promise = axios.get(`${URL_BASE}/transaction`, '', config);
  return promise;
}

function postTransaction(transaction) {
  const promise = axios.post(`${URL_BASE}/transaction`, transaction);
  return promise;
};

export { postSignUp, postLogin, getTransactions, postTransaction };