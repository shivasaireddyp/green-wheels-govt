import React from "react";
import { Link } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { loginContext } from "../../contexts/loginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {BsPersonFill} from "react-icons/bs"
import { useLocation } from "react-router-dom";


function Navbar() {
  let location = useLocation()

  const navigate = useNavigate();

  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);

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
                className="nav-link text-white fw-bold active m-auto px-5"
                aria-current="page"
                to="/"
              >
                <p>Home</p>
              </Link>

              <Link
                className="nav-link text-white fw-bold m-auto px-5"
                to="/register-event"
                replace
                state={{from: location}}
              >
                <p>Register Event</p>
              </Link>

              <Link
                className="nav-link text-white fw-bold m-auto px-5"
                to="upcoming-events"
              >
                <p>Upcoming Events</p>
              </Link>

              <Link
                className="nav-link text-white fw-bold m-auto px-5"
                to="about-us"
              >
                <p>About Us</p>
              </Link>

              {!userLoginStatus ? (
                <Link
                  className="nav-link text-white fw-bold m-auto px-5"
                  to="login"
                >
                  <p>Login</p>
                </Link>
              ) : (
                <Link class="nav-link text-white fw-bold m-auto px-5 dropdown">
                  <p
                    class=" dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BsPersonFill />{" "}{currentUser.username}
                  </p>
                  <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-lg-start dropdown-menu-sm-start dropdown-menu-md-start">
                    <li>
                      <Link class="dropdown-item fw-bold" to="user-profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="dropdown-item fw-bold"
                        to="booking-history"
                      >
                        History
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fw-bold"
                        onClick={logoutUser}
                        to="login/"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </Link>
              )}
              {userLoginStatus === false && (
                <Link
                  className="nav-link text-white fw-bold m-auto px-5"
                  to="register"
                >
                  <p>Sign Up</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
