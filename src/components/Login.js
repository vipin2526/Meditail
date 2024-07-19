import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../features/user/userSlice';
import '../components/css/Myalert.css'
import myalert from './js/myalert';
import loginBg from '../asset/images/medicalBG4.jpg'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const { status, error } = useSelector((state) => state.user);

  if (status === 'succeeded') {
    navigate('/profile');
    myalert('Login successful!', 2000, 'green');
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      dispatch(loginUser({ username, password, remember }));
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-foreground">
      <div className="bg-card text-card-foreground rounded-3xl shadow-2xl overflow-hidden flex w-3/4 max-w-4xl transform transition-transform hover:scale-105 boxShadowWhite">
        <div className="w-1/2 p-8 bg-gradient-to-br from-primary to-secondary">
          <h2 className="text-4xl font-extrabold mb-6 text-primary-foreground">SIGN IN</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="USER ID"
                className="w-full p-4 border border-primary rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full p-4 border border-primary rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary mr-2"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <a href="/forget_password" className="text-primary-foreground hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-3 rounded-lg hover:bg-primary/80 transition-colors bg-green-500 text-white hover:bg-green-600"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Logging in...' : 'Login'}
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mt-6 text-center text-muted-foreground">or use your account</div>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="bg-secondary text-secondary-foreground p-3 rounded-full hover:bg-secondary/80 transition-colors">
              <img undefinedhidden="true" alt="social-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🌐" />
            </button>
            <button className="bg-secondary text-secondary-foreground p-3 rounded-full hover:bg-secondary/80 transition-colors">
              <img undefinedhidden="true" alt="google-icon" src="https://openui.fly.dev/openui/24x24.svg?text=G" />
            </button>
            <button className="bg-secondary text-secondary-foreground p-3 rounded-full hover:bg-secondary/80 transition-colors">
              <img undefinedhidden="true" alt="linkedin-icon" src="https://openui.fly.dev/openui/24x24.svg?text=IN" />
            </button>
          </div>
        </div>
        <div
          className="w-1/2 bg-cover bg-center p-8 flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${loginBg})` }}
        >
          <h2 className="text-4xl font-extrabold text-black mb-6">Start your journey now</h2>
          <p className="text-black mb-6">If you don't have an account yet, join us and start your journey.</p>
          <Link to="/registration" className="bg-transparent border border-black text-black py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition-colors">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;