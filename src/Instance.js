import {getAccessToken} from './screens/LoginScreens';
import axios from 'axios';
import { refreshAccessTokenSuccess, refreshAccessTokenFailure } from './actions/refreshTokenAction';
import { getRefreshToken, refreshAccessToken} from './screens/LoginScreens';
import store from './store'

export const apiInstance = axios.create({
    baseURL: 'https://hochiminh.mobifone.vn/luongAMGP',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
  });
  
  apiInstance.interceptors.request.use(
    (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  apiInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {    
      if (error.response.status === 401 ) {
        const refreshToken = getRefreshToken();
      if (refreshToken) {
        try {       
           
          const newAccessToken = await refreshAccessToken(refreshToken);
          store.dispatch(refreshAccessTokenSuccess(newAccessToken));
        } catch (error) {
          store.dispatch(refreshAccessTokenFailure());
          console.log("Đã chạy vào đây1")
        }
      } else {
        
        store.dispatch(refreshAccessTokenFailure());
      }
      }
      return Promise.reject(error);
    }
  );


 