import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Doen't let the form refresh
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password },
        { withCredentials: true } // Important for cookies/session
      );
      alert(res.data.message);
      navigate('/shop');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};


