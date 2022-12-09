import React from "react";

function Footer() {
  return (
    <div className='footer fixed-bottom'>
      <h4>Copyright &copy; David Harris</h4>
      <div className='footer-icons'>
        <a href='https://www.linkedin.com/in/dlogoh/'>
          <i className='fa-brands fa-2x fa-linkedin icon' />
        </a>
        <a href='https://github.com/dlogoh'>
          <i className='fa-brands fa-2x fa-square-github icon' />
        </a>
      </div>
    </div>
  );
}

export default Footer;
