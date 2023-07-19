
const initialState ={
    username : "",
    password : "",
    remember : false,
}

const loginReducer = (state= initialState , action)=>{
        switch(action.type) {
            case 'LOGIN':
                return ;
            default:
                return state;
        }
}
export default loginReducer;