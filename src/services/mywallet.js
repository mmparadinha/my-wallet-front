import axios from 'axios';

const URL_BASE = 'localhost:27017/';

function postSignUp(registration) {
  const promise = axios.post(`${URL_BASE}/sign-up`, registration);
  return promise;
};

function postLogin(login) {
  const promise = axios.post(`${URL_BASE}/`, login);
  return promise;
};

// // function Header() {
// //   const autenticador = JSON.parse(localStorage.getItem('trackit'));
// //   const config = {
// //     headers: { Authorization: `Bearer ${autenticador.token}` }
// //   };
// //   return config;
// // };

// function getTransaction(transaction) {
  // const promise = axios.get(`${URL_BASE}/transactions`, transaction);
  // return promise;
// }

function postTransaction(transaction) {
  const promise = axios.post(`${URL_BASE}/transactions`, transaction);
  return promise;
};

export { postSignUp, postLogin, postTransaction };