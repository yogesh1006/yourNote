import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
      alt="logo"
    />
  );

  return (
    <div className="header">
      <div className="logo">
          <span> {logo}</span>YourNote
      </div>
      <div className="links">
        <Link to="/login">Signin</Link>
        <Link to="/register">Signup</Link>
      </div>
    </div>
  );
}

export default Header;
