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
      userId: authorization.userId
    }
  };
  return config;
};

function getTransactions() {
  const config = Header();
  const promise = axios.get(`${URL_BASE}/transaction`, config);
  return promise;
}

function postTransaction(transaction) {
  const config = Header();
  const promise = axios.post(`${URL_BASE}/transaction`, transaction, config);
  return promise;
};

function putTransaction(transaction) {
  const config = Header();
  const promise = axios.put(`${URL_BASE}/transaction`, transaction, config);
  return promise;
};

function deleteTransaction(transactionId) {
  const config = Header();
  const promise = axios.delete(`${URL_BASE}/transaction/${transactionId}`, config);
  return promise;
};

export { postSignUp, postLogin, getTransactions, postTransaction, putTransaction, deleteTransaction };