import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../features/user/userSlice';
import registerBg from '../asset/images/reportdesign.jpg'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);

  if (status === 'succeededR') {
    navigate('/login');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, password, phoneNo }));
  };
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-foreground">
      <div className="bg-card text-card-foreground rounded-3xl shadow-2xl overflow-hidden flex w-3/4 max-w-4xl transform transition-transform hover:scale-105 boxShadowWhite">
        <div className="w-1/2 bg-cover bg-center p-8 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${registerBg})` }}>
          <h2 className="text-4xl font-extrabold text-black mb-6">Join us now!</h2>
          <p className="text-black mb-6">Start your journey with us by creating an account.</p>
          <Link to="/login" className="bg-transparent border border-black text-black py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition-colors">
            Sign In
          </Link>
        </div>
        <div className="w-1/2 p-8 bg-gradient-to-br from-primary to-secondary">
          <h2 className="text-4xl font-extrabold mb-6 text-primary-foreground">REGISTER</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="EMAIL ID"
                className="w-full p-4 border border-primary rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full p-4 border border-primary rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="PHONE NO"
                className="w-full p-4 border border-primary rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Registering...' : 'Register'}
            </button>
          </form>
          {error && (<p className="text-red-500">{error}</p>)}
          <div className="mt-6 text-center text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-foreground hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;