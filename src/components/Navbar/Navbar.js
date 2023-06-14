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
                <p>Home</p>
              </Link>

              <Link
                className="nav-link text-white m-auto px-4 text-decoration-underline"
                to="/user-profile/register-event"
              >
                <p>Register Event</p>
              </Link>

              <Link
                className="nav-link text-white m-auto px-4 text-decoration-underline"
                to="upcoming-events/"
              >
                <p>Upcoming Events</p>
              </Link>

              {!userLoginStatus ? (
                <Link className="nav-link text-white m-auto px-4 text-decoration-underline" to="login/">
                  <p>Login</p>
                </Link>
              ) : (
                <Link
                  className="nav-link text-white m-auto px-4 text-decoration-underline"
                  onClick={logoutUser}
                  to="login/"
                >
                  <p>Logout</p>
                </Link>
              )}

              <Link className="nav-link text-white m-auto px-4 text-decoration-underline" to="register/">
                <p>Sign Up</p>
              </Link>

              <Link className="nav-link text-white m-auto px-4 text-decoration-underline" to="/">
                <p>About Us</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
