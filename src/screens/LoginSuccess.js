import React from 'react';
import { useState,useEffect } from 'react'; 
import { getAccessToken, refreshAccessToken } from './LoginScreens';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSuccess = () => {
    const [list,setList] =useState([
        {
            code: '',
            name:'',
        }
    ]);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const accessToken = getAccessToken();

    useEffect(() => {
        if (!accessToken) {
          navigate('/login');
        }
      }, []);
    
    const handleClick = async (e) => {
        e.preventDefault();
        setShow(!show);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}` 
            }
        };
        try {
            const response = await axios.get('https://hochiminh.mobifone.vn/luongAMGP/shop/find', config);
            setList(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
            try {
                const newAccessToken = await refreshAccessToken();
                config.headers.Authorization = `Bearer ${newAccessToken}`;
                const response = await axios.get('https://hochiminh.mobifone.vn/luongAMGP/shop/find', config);
                console.log("data:  "+response.data);
                setList(response.data);
            } catch (error) {
                console.log(error);   
            }
            } else {
            console.log(error);         
            }
        }
    }
    return (
        <div>
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