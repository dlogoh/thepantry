import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("Success");
  };

  return (
    <div className='container'>
      <h2 className='text-center'>Log In</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
            placeholder='example@email.com'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Log In
        </button>
      </form>
      <h5 className='mt-5'>
        Don't have an account?{" "}
        <Link to='/register' className='text-primary'>
          Sign Up
        </Link>
      </h5>
    </div>
  );
}

export default Login;
