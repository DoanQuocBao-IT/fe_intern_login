
const initialState = {
    Islogin:false
  };
  
  const refreshTokenReducer = (state = initialState, action) => {

    switch (action.type) {
      case 'LOGIN_SUCCESS':
        {       
        return {
            ...state,
            Islogin: true,
        }
        }
        case 'LOGOUT':
            return {
                ...state,
                Islogin: false,
            }
      default:
        return state;
    }
  };
  
  export default refreshTokenReducer;