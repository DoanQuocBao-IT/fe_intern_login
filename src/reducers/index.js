import {  combineReducers } from 'redux';
import refreshAccessToken  from './refreshTokenReducer';

const rootReducer = combineReducers({
        refreshToken: refreshAccessToken
})
export default rootReducer;
