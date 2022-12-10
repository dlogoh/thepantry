import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const authLinks = (
    <ul className='navbar-nav mb-2 mb-lg-0'>
      <li className='nav-item fs-4'>
        <Link to='/' className='nav-link' aria-current='page'>
          Home
        </Link>
      </li>
      <li className='nav-item fs-4'>
        <Link to='#!' onClick={logout} className='nav-link'>
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='navbar-nav mb-2 mb-lg-0'>
      <li className='nav-item fs-4'>
        <Link to='/' className='nav-link' aria-current='page'>
          Home
        </Link>
      </li>
      <li className='nav-item fs-4'>
        <Link to='/register' className='nav-link'>
          Sign Up
        </Link>
      </li>
      <li className='nav-item fs-4'>
        <Link to='/login' className='nav-link'>
          Log In
        </Link>
      </li>
      <li className='nav-item fs-4'>
        <Link to='/contact' className='nav-link'>
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container-fluid'>
        <Link
          to='/'
          className='navbar-brand fs-2 ms-3'
          style={{ color: "coral" }}
        >
          The Pantry
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse justify-content-end navbar-collapse me-3'
          id='navbarTogglerDemo02'
        >
          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
          {/* <ul className='navbar-nav mb-2 mb-lg-0'>
            <li className='nav-item fs-4'>
              <Link to='/' className='nav-link' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item fs-4'>
              <Link to='/register' className='nav-link'>
                Sign Up
              </Link>
            </li>
            <li className='nav-item fs-4'>
              <Link to='/login' className='nav-link'>
                Log In
              </Link>
            </li>
            <li className='nav-item fs-4'>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
