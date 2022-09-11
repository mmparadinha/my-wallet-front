import axios from 'axios';

const URL_BASE = '127.0.0.1:5000';

function postSignUp(registration) {
  const promise = axios.post(`${URL_BASE}/users`, registration);
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
      userId: authorization.userId 
  }
  };
  return config;
};

function getTransactions() {
  const config = Header();
  const promise = axios.get(`${URL_BASE}/transactions`, '', config);
  return promise;
}

function postTransaction(transaction) {
  const config = Header();
  const promise = axios.post(`${URL_BASE}/transactions`, transaction, config);
  return promise;
};

export { postSignUp, postLogin, getTransactions, postTransaction };