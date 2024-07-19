import React, { useState } from 'react';

function SignIn(props) {
  const [user, setUser] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    props.onLogin(user);    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (

    <form>
      <h1 className="h3 mb-3 fw-normal">Sign in</h1>

      <div className="form-floating my-3">
        <input type="email" className="form-control py-2"
          name="email" id="email" placeholder="name@example.com"
          onChange={handleChange} required />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating my-3">
        <input type="password" id="password" className="form-control py-2" name="password" placeholder="Password"
          onChange={handleChange} required />
        <label htmlFor="password">Password</label>
      </div>

      <button className="btn btn-primary w-100 py-3" type="submit" onClick={handleLogin}>Sign in</button>

    </form>

  );
}

export default SignIn;