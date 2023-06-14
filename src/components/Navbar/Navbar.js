import React from "react";
import { Link } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { loginContext } from "../../contexts/loginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark shadow-5-strong">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <h3>LEM</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                className="nav-link text-white active m-auto px-4 text-decoration-underline"
                aria-current="page"
                to="/"
              >
                <h5>Home</h5>
              </Link>

              <Link
                className="nav-link text-white m-auto px-4 text-decoration-underline"
                to="/user-profile/register-event"
              >
                <h5>Register Event</h5>
              </Link>

              <Link
                className="nav-link text-white m-auto px-4 text-decoration-underline"
                to="upcoming-events/"
              >
                <h5>Upcoming Events</h5>
              </Link>

              {!userLoginStatus ? (
                <Link className="nav-link text-white m-auto px-4 text-decoration-underline" to="login/">
                  <h5>Login</h5>
                </Link>
              ) : (
                <Link
                  className="nav-link text-white m-auto px-4 text-decoration-underline"
                  onClick={logoutUser}
                  to="login/"
                >
                  <h5>Logout</h5>
                </Link>
              )}

              <Link className="nav-link text-white m-auto px-4 text-decoration-underline" to="register/">
                <h5>Sign Up</h5>
              </Link>

              <Link className="nav-link text-white m-auto px-4 text-decoration-underline" to="/">
                <h5>About Us</h5>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
