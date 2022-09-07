import axios from 'axios';

//const URL_BASE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

// function postSignUp(cadastro) {
//   const promise = axios.post(`${URL_BASE}/auth/sign-up`, cadastro);
//   return promise;
// };

function postLogin(login) {
  const promise = axios.post(/* `${URL_BASE}/auth/login` */, login);
  return promise;
};

// function Header() {
//   const autenticador = JSON.parse(localStorage.getItem('trackit'));
//   const config = {
//     headers: { Authorization: `Bearer ${autenticador.token}` }
//   };
//   return config;
// };

export { postSignUp, postLogin };