
const initialState ={
    username : "",
    password : "",
    remember : false,
}

const loginReducer = (state= initialState , action)=>{
        switch(action.type) {
            case 'LOGIN':
              {
                const response = await apiInstance.post('/auth/login', {
                    username: state.username,
                    password: state.password
                });
                const { accessToken, refreshToken } = response.data;
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
                
                console.log(response);
                setLoading(false);
                navigate('/loginsuccess');

                if (state.remember) {
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                }
              }
                
            default:
                return state;
        }
}
export default loginReducer;