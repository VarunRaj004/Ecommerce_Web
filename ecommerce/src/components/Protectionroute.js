import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Protectionroute = ({children}) => {
    const [auth , setAuth] = useState(false) ;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/auth/profile', {withCredentials: true})
        .then(() => setAuth(true)).catch(() => navigate('/login'));
    },[navigate]);
    console.log(auth);
    if(auth){
        return children ;
    }

}