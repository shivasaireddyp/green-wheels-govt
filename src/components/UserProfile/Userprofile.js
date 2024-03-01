import React from "react";
import { useContext } from "react";
import { loginContext } from "../../contexts/loginContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Userprofile.css";

function Userprofile() {
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
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }
}

export default Userprofile;
