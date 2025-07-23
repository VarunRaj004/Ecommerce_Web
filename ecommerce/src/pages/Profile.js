import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const [user,setUser] = useState(null);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/auth/profile',{withCredentials  :true})
        .then((res) => (setUser(res.data)))
        .catch(err => setError(err.response?.data?.error || 'Error fetching profile')) 
         } , [] );




    if (error) return <p>{error}</p>;
    if(!user) {
        return (
            <div>
                <h2>Loading...</h2>

            </div>
        )
    }

    const logout = () => {
        axios.post("http://localhost:5000/api/auth/logout", {}, {withCredentials: true}).then(navigate('/login'));
    }



    return (
        <div style={{ maxWidth: 500, margin: 'auto' }}>
        <h2>👤 My Profile</h2>
        <p><strong>User ID:</strong> {user._id}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick = {() => logout()}> LogOut </button>
        </div>
    );
}

