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
      <div className="text-light">
        <h2>Dashboard</h2>
        <h3>Welcome, {currentUser.name}</h3>
        <div class="container d-flex justify-content-center mt-5">
          <div className="cardm">
            <div className="top-container">
              <img
                src={currentUser.image}
                className="img-fluid profile-image"
                style={{ width: "100" }}
              ></img>
              <div class="ml-3">
                <h4 class="name">{currentUser.name}</h4>
              </div>
            </div>
            <div class="recent-border mt-4">
              <span class="recent-orders">Recent Bookings</span>
            </div>
            <div class="wishlist-border pt-2">
              <span class="wishlist">Wishlist</span>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }

  // return (
  // <div>
  //   <h2>Dashboard</h2>
  //   <p>Welcome, {currentUser.username}</p>
  //   {/* <Link to="/user-profile/register-event">
  //     <button>Register Event with us</button>
  //   </Link> */}

  //     if(userLoginStatus){
  //       <Outlet />
  //     }
  //     else{
  //       <Navigate to={'/login'}/>
  //     }

  //   {/* <button className='btn btn-primary' onClick={navigate('/user-profile/register-event/')}>Register an event with us</button> */}
  // </div>
  // )
}

export default Userprofile;
