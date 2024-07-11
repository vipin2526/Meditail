import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../features/user/userSlice';
import myalert from './js/myalert';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const { status, error } = useSelector((state) => state.user);

  if (status === 'succeeded') {
    myalert('Login successful!');
    setTimeout(() => navigate('/profile'), 1000);
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      dispatch(loginUser({ username, password, remember })).unwrap();
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="container-fluid login_body">
      <div className="container login-container">
        <form className="box" onSubmit={handleLogin}>
          <h1 style={{ marginBottom: '3vh' }}>Login</h1>
          <input
            type="text"
            name="username"
            placeholder="USER ID"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
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
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </button>
          {error && console.log(error)}
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
