import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
        </div>
      </div>
    </nav>
    // <nav>
    //   <div className='nav-center'>
    //     <div className='nav-header'>
    //       <Link to='/'>
    //         <h1 className='logo'>The Pantry</h1>
    //       </Link>
    //       <button className='nav-toggle' onClick={handleClick}>
    //         <i className='fas fa-bars'></i>
    //       </button>
    //     </div>
    //     <ul className={showLinks ? "show-links links" : "links"}>
    //       <li>
    //         <Link to='/'>Home</Link>
    //       </li>
    //       {/* <li>
    //         <a href='#recipes'>Recipes</a>
    //       </li> */}
    //       <li>
    //         <Link to='/register'>Sign Up</Link>
    //       </li>
    //       <li>
    //         <Link to='/login'>Log In</Link>
    //       </li>
    //       <li>
    //         <Link to='#contact'>Contact</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navbar;
