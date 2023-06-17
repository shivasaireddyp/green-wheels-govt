import React from "react";
import { useContext } from "react";
import { loginContext } from "../../contexts/loginContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Userprofile.css";

function Userprofile() {
  let navigate = useNavigate();
  let location = useLocation();
  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
  if (userLoginStatus) {
    return (
      <div className="text-light main-cont">
        <h1>Dashboard</h1>
        <div className="row row-cols-1 g-3">
          <div className="col-md-3">
            <div className="cardm bg-dark">
              <div className="top-container">
                <img
                  src={currentUser.image}
                  className="img-fluid profile-image"
                  // style={{ width: "100" }}
                ></img>
                <div className="">
                  <h3 className="name mt-1">@{currentUser.username}</h3>
                </div>
              </div>
              <div className="recent-border mt-4">
                <span className="recent-orders">
                  <Link className="text-decoration-none" to="/booking-history">
                    Booking History
                  </Link>
                </span>
              </div>
              <div className="wishlist-border pt-2">
                <span className="wishlist">
                  <Link className="text-decoration-none" to="#">
                    Wishlist
                  </Link>
                </span>
              </div>
            </div>
          </div>
          {/* {location.pathname !== "/user-profile" && (
            <div className="reg-form bg-dark col-md-8">
              <div>
                <Outlet />
              </div>
            </div>
          )} */}
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }
}

export default Userprofile;
