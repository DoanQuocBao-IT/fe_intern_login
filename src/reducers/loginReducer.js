const initialState = {
    isAuthenticated: false,
    accessToken: '',
    refreshToken: '',
  };

const loginReducer = (state= initialState , action)=>{
        switch(action.type) {
            case 'LOGIN_SUCCESS':
                return {
                    ...state,
                    isAuthenticated: true,
                    accessToken: action.payload.accessToken,
                    refreshToken: action.payload.refreshToken,
                };
            default:
                return state;
        }
}
export default loginReducer;