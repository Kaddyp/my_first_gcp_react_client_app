import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [user, setUser] = useState(null);

  const handleSignUp = () => {
    axios.post('http://localhost:5555/ap/auth/register', { user }, { withCredentials: true })
      .then(response => {
        setUser(user);
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form>
      <h1 className="h3 mb-3 fw-normal">Create account</h1>

      <div className="form-floating my-3">
        <input type="text" className="form-control py-2" id="name" name="name" placeholder="name@example.com" onChange={handleChange} required />
        <label htmlFor="name">Your name</label>
      </div>

      <div className="form-floating my-3">
        <input type="email" className="form-control py-2" id="email" name="email" placeholder="name@example.com" onChange={handleChange} required />
        <label htmlFor="email">Email</label>
      </div>

      <div className="form-floating my-3">
        <input type="password" className="form-control py-2" id="password" name="password" placeholder="Password" onChange={handleChange} required />
        <label htmlFor="password">Password</label>
      </div>
      <div className="form-floating my-3">
        <input type="password" className="form-control py-2" id="reEnterPassword" name="reEnterPassword" placeholder="Re-enter Password" onChange={handleChange} required />
        <label htmlFor="reEnterPassword">Re-enter password</label>
      </div>

      <button className="btn btn-primary w-100 py-3" type="submit" onClick={handleSignUp}>Sign Up</button>

    </form>
  );
}

export default SignUp;