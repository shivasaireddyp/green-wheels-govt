import React from "react";
import {Link} from 'react-router-dom' 
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src="data:image/png;base64,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" width="30" height="30" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="login">
              Sign-in
            </Link>
            <Link className="nav-item nav-link" to="register">
              Register
            </Link>
            <Link className="nav-item nav-link" to="about">
              About
            </Link>
            <Link className="nav-item nav-link" to="contact">
              Contact
            </Link>
          </div>
          <span className="navbar-text">Website Name</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
