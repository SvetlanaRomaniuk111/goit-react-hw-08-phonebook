import axios from 'axios';

export const authHostInsance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
})


export const baseHostInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

authHostInsance.interceptors.request.use(authInterceptor);

