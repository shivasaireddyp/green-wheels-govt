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
      <div className="container text-light">
        <h1>Dashboard</h1>
        <div className="row row-cols-1 g-3">
          <div className="col-md-4">
            <div className="cardm">
              <div className="top-container">
                <img
                  src={currentUser.image}
                  className="img-fluid profile-image"
                  style={{ width: "100" }}
                ></img>
                <div className="">
                  <h3 className="name mt-1">@{currentUser.username}</h3>
                </div>
              </div>
              <div className="recent-border mt-4">
                <span className="recent-orders">
                  <Link className="text-decoration-none" to="/">
                    Booking History
                  </Link>
                </span>
              </div>
              <div className="wishlist-border pt-2">
                <span className="wishlist">
                  <Link className="text-decoration-none" to="/">
                    Wishlist
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="reg-form col-md-8">
            <div className="">
              <Outlet />
            </div>
          </div>
        </div>
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
