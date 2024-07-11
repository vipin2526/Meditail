import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../features/user/userSlice';


const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username:email, password, phoneNo }));
  };

  return (
    <div className="container-fluid login_body">
      <div className="container login-container">
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <input
            type="email"
            name="email"
            placeholder="EMAIL ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="number"
            name="phone_no"
            placeholder="PHONE NO"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Registering...' : 'Register'}
          </button>
          {error && <p className="error">{error}</p>}
          <div className="register-line">
            I have an account? <Link to='/login'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
