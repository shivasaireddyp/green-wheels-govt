import React from 'react'
import {Link} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

function Navbar() {

  return (
    <div style={{backgroundColor: "#AA77FF"}}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/"><h3>LEM</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link text-white active m-auto" aria-current="page" to="/"><h5>Home</h5></Link>
        <Link className="nav-link text-white m-auto ml-4" to="user-profile/register-event/"><h5>Register Event</h5></Link>
        <Link className="nav-link text-white m-auto ml-3" to="user-profile/booking-history/"><h5>Booking History</h5></Link> 
        <Link className="nav-link text-white m-auto ml-3" to="upcoming-events/"><h5>Upcoming Events</h5></Link>
        <Link className="nav-link text-white m-auto ml-3" to="login/"><h5>Login</h5></Link>
        <Link className="nav-link text-white m-auto ml-4" to="register/"><h5>Sign Up</h5></Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar