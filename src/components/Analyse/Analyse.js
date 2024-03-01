import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
// import Audis from "./../AudiBooking/audis.json";
import { AuditoriumContext } from "../../contexts/AuditoriumContext";
import { Link, useNavigate, Navigate } from "react-router-dom";
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


  // let [audis, setAudis] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     axios
  //       .get("http://localhost:4000/audis-api/audis")
  //       .then((response) => {
  //         setAudis([...response.data.payload]);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   fetchData();
  // }, [setAudis]);

  // console.log(audis)

  // let {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // let addEvent = (newEvent) => {
  //   console.log(newEvent);

  //   axios
  //     .post("http://localhost:4000/events-api/register-event", newEvent)
  //     .then((response) => {
  //       if (response.status === 201) {
  //         console.log("good response");
  //         navigate("/event-guidelines");
  //       }
  //       if (response.status !== 201) {
  //         setApiError(response.data.message);
  //       }
  //     })
  //     .catch((err) => {
  //       if (err.response) {
  //         setApiError(err.message);
  //       }
  //       //the client never received a response
  //       else if (err.request) {
  //         setApiError(err.message);
  //       }
  //       //for other error
  //       else {
  //         setApiError(err.message);
  //       }
  //     });
  // };

  if (userLoginStatus) {
    return (
      <div className="container text-light">
        <div className="card bg-dark" style={{ borderRadius: "33px" }}>
          <h1 className="text-center fw-bold m-3">Analyse and Predict:</h1>

        </div>
      </div>
    );
  } else {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }
}

export default RegisterEvent;
