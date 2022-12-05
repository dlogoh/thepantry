import React, { useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h1 className='logo'>The Pantry</h1>
          <button className='nav-toggle' onClick={handleClick}>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <ul className={showLinks ? "show-links links" : "links"}>
          <li>
            <a href='#home'>home</a>
          </li>
          <li>
            <a href='#recipes'>Recipes</a>
          </li>
          <li>
            <a href='#signup'>Sign Up</a>
          </li>
          <li>
            <a href='#login'>Log In</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
