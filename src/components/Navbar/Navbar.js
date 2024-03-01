import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    
         <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="/path-to-your-logo.png" width="30" height="30" alt="Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home</a>
          <a className="nav-item nav-link" href="#">Sign-in</a>
          <a className="nav-item nav-link" href="#">About</a>
          <a className="nav-item nav-link" href="#">Contact</a>
        </div>
        <span className="navbar-text">
          Website Name
        </span>
      </div>
    </nav>
         </div>
  )
}

export default Navbar;