import React from 'react'
import { Link } from 'react-router-dom';
import './css/Login.css'
const Registration = () => {
  return (
    <div className="container-fluid login_body ">
      <div class="container login-container" >
        <form method="post" action="/signup">
          <h1>Signup</h1>
          <input type="email" name="email" placeholder=" EMAIL ID" required />
          <input type="password" name="password" placeholder=" PASSWORD" />
          <input type="number" name="phone_no" placeholder=" PHONE NO" />
          <button>register</button>
          <div class="register-line">I have an account?<Link to='/login'> Login</Link></div>

        </form>
      </div>
    </div>
  )
}

export default Registration;