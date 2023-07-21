

export const refreshAccessTokenSuccess = (accessToken) => ({
  type: 'REFRESH_ACCESS_TOKEN_SUCCESS',
  payload: accessToken,
});

export const refreshAccessTokenFailure = () => ({
  type: 'REFRESH_ACCESS_TOKEN_FAILURE',
});

export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
  });  
  export const logout = () => ({
    type: 'LOGOUT',
  });  



