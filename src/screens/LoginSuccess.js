import React from 'react';
import { useState} from 'react'; 
import  {apiInstance}  from '../Instance';
import {useDispatch} from 'react-redux';
import { logout } from '../actions/refreshTokenAction';


const LoginSuccess = () => {
    const [list,setList] =useState([
        {
            code: '',
            name:'',
        }
    ]);
    const [show, setShow] = useState(false);
    const dispatch =useDispatch();


    const handleClick = async (e) => {
        e.preventDefault();
        setShow(!show);
        
        try {
            const response = await apiInstance.get('/shop/find');
            setList(response.data);
        } catch (error) {   
    
        }
    }
    const handleClickLogout =(e)=> {
        e.preventDefault();
        dispatch(logout())
    }
    return (
        <div>
            <button onClick={handleClickLogout}>Logout</button>
            <button onClick={handleClick}>{show ? 'Hide' : 'Show'}</button>
        {show && (
            <>
            <h1>Danh sách</h1>
            <ul>
            {list.map((item) => (
                <li key={item.code}>{item.name}</li>
            ))}
            </ul>
            </>
        )}
        </div>
    )
}
export default LoginSuccess