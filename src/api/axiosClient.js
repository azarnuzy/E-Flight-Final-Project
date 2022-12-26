import axios from 'axios';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Authorization: '',
  },
});

axiosClient.interceptors.request.use(async (request) => {
  // add auth header with jwt if account is logged in and request is to the api url
  const account = JSON.parse(localStorage.getItem('user-info'));
  const isLoggedIn = account?.token;

  if (isLoggedIn) {
    request.headers.Authorization = `Bearer ${account.token}`;
  } else {
  }

  return request;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
    }
    // console.log(error.response.status);
    throw error;
  }
);

export default axiosClient;
