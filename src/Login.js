import React from 'react';
import './Login.css';

const Login = () => {
  return (
    

    <div className="signup-container">
      <div className="image-container">
       
        <img src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Signup" />
      </div>
      <div className="signup-details">
     
        <form>
          <h2>Login</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>

  );
};

export default Login;
