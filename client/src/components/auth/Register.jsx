import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

function Register({ setAlert }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords must match", "danger");
    } else {
      console.log("Success");
    }
  };

  return (
    <div className='container'>
      <h2 className='text-center'>Get started today!</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            aria-describedby='emailHelp'
            placeholder='example@email.com'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Must be at least 6 characters'
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password2' className='form-label'>
            Verify Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password2'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>
      <h5 className='mt-5'>
        Already have an account?{" "}
        <Link to='/login' className='text-primary'>
          Sign In
        </Link>
      </h5>
    </div>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
