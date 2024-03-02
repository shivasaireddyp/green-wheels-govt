import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
// import Audis from "./../AudiBooking/audis.json";
import { AuditoriumContext } from "../../contexts/AuditoriumContext";
import { Link, useNavigate, Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { loginContext } from "../../contexts/loginContext";
import { useLocation } from "react-router-dom";
import { TbAlertCircle } from "react-icons/tb";

function RegisterEvent() {
  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
  let navigate = useNavigate();
  let location = useLocation();
  let [apiError, setApiError] = useState("");
  let [selectedTimeError,setSelectedTimeError] = useState(null)

  if (userLoginStatus) {
    return (
      <div className="container text-light">
        <div className="card bg-dark" style={{ borderRadius: "33px" }}>
          <h1 className="text-center fw-bold m-3">Analyse and Predict:</h1>
          <div className="row text-center container">
            <Link className="col-3" to="/analyse/anantagiri-hills">Anantagiri Hills</Link>
            <Link className="col-3">Lakshwadeep Islands</Link>
            <Link className="col-3">Kuntala Waterfalls</Link>
          </div>
        </div>
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }
}

export default RegisterEvent;
