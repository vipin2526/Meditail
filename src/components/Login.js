import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './css/Login.css'
import './css/Myalert.css'
import myalert from './js/myalert';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    // Perform your API call here
    try {
      const response = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          remember: remember,
        }),
      });

      if (response.status === 200) {
        myalert('Login successful!')
        setTimeout(() => navigate('/'), 1000)
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };

  return (
    <div className="container-fluid login_body">
      <div className="container login-container" >
        <form className="box" onSubmit={handleLogin}>
          <h1 style={{ marginBottom: '3vh' }}>Login</h1>
          <input
            type="text"
            name="username"
            placeholder=" USER ID"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder=" PASSWORD"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="line">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              remember me
            </label>
            <a href="/forget_password" className="forget">
              forget password?
            </a>
          </div>
          <button type="submit">login</button>
          <div className="register-line">
            Don't have an account?
            <Link to='/registration'> Register</Link>
          </div>
        </form>
      </div>
      </div>
  );
}

export default Login;