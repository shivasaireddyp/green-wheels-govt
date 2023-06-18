import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
// import Audis from "./../AudiBooking/audis.json";
import { AuditoriumContext } from "../../contexts/AuditoriumContext";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { loginContext } from "../../contexts/loginContext";
import { useLocation } from "react-router-dom";

function RegisterEvent() {
  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
  const { selectedAuditorium } = useContext(AuditoriumContext);
  let navigate = useNavigate();
  let location = useLocation();

  let [audis, setAudis] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:4000/audis-api/audis")
        .then((response) => {
          setAudis([...response.data.payload]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [setAudis]);

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let addEvent = (newEvent) => {
    console.log(newEvent);
  };
  if (userLoginStatus) {
    return (
      <div className="container text-light">
        <div className="card bg-dark" style={{ borderRadius: "33px" }}>
          <h1 className="text-center fw-bold m-4">Register an Event</h1>
          <form className="w-75 m-auto" onSubmit={handleSubmit(addEvent)}>
            <div className="row">
              <div className="form-group col-sm mb-4">
                <label htmlFor="firstname">First Name:</label>
                <input
                  className="form-control"
                  id="firstname"
                  type="text"
                  placeholder="e.g Vikram"
                  {...register("firstname", { required: true })}
                ></input>
                {errors.firstname?.type === "required" && (
                  <p className="text-primary fs-6">*required field</p>
                )}
              </div>
              <div className="form-group col-sm mb-4">
                <label htmlFor="lastname">Last Name:</label>
                <input
                  className="form-control"
                  id="lastname"
                  placeholder="e.g Kumar"
                  {...register("lastname", { required: true })}
                ></input>
                {errors.lastname?.type === "required" && (
                  <p className="text-primary fs-6">*required field</p>
                )}
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="eventname">Event Name:</label>
              <input
                type="text"
                className="form-control"
                id="eventname"
                placeholder="e.g Krithomedh Inaugration"
                {...register("eventname", { required: true })}
              />
              {errors.eventname?.type === "required" && (
                <p className="text-primary fs-6">*required field</p>
              )}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="description">Event Description:</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder=""
                {...register("description", { required: true })}
              />
              <p className="text-muted">
                Describe about the event in atleast 100 words
              </p>
              {errors.description?.type === "required" && (
                <p className="text-primary fs-6">*required field</p>
              )}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="headmail">Event Organiser Mail ID (POC):</label>
              <input
                type="email"
                className="form-control"
                id="headmail"
                placeholder="name@example.com"
                {...register("headmail", { required: true })}
              />
              {errors.headmail?.type === "required" && (
                <p className="text-primary fs-6">*required field</p>
              )}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="auditorium">Select Auditorium:</label>
              <select
                className="form-control"
                id="auditorium"
                {...register("auditorium", { required: true })}
              >
                {!selectedAuditorium && (
                  <option disabled selected value="">
                    Please select an auditorium
                  </option>
                )}
                {audis.map((audi) => (
                  <option
                    key={audi._id}
                    value={audi.name}
                    selected={
                      selectedAuditorium && selectedAuditorium._id === audi._id
                    }
                  >
                    {audi.name}
                  </option>
                ))}
              </select>
              {errors.auditorium?.type === "required" && (
                <p className="text-primary fs-6">*required field</p>
              )}
            </div>
            <div className="form-group mb-2">
              <label htmlFor="eventdate" className="font-weight-bold">
                Select a date:
              </label>
              <input
                type="date"
                className="form-control mb-2"
                id="eventdate"
                {...register("eventdate", { required: true })}
              />
              {errors.eventdate?.type === "required" && (
                <p className="text-primary fs-6">*required field</p>
              )}
              <Link className="text-decoration-none" to="/upcoming-events">
                <p>Refer Upcoming Events</p>
              </Link>
            </div>
            <div className="row">
              <p>Choose a time for the event</p>
              <div className="form-group col mb-4">
                <label htmlFor="eventstarttime">Select Start Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="eventstarttime"
                  placeholder=""
                  {...register("eventstarttime", { required: true })}
                />
                {errors.eventstarttime?.type === "required" && (
                  <p className="text-primary fs-6">*required field</p>
                )}
              </div>
              <div className="form-group col mb-4">
                <label htmlFor="eventendtime">Select End Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="eventendtime"
                  placeholder=""
                  {...register("eventendtime", { required: true })}
                />
                {errors.eventendtime?.type === "required" && (
                  <p className="text-primary fs-6">*required field</p>
                )}
              </div>
            </div>
            <div className="m-auto mb-4">
              <button
                className="btn text-white"
                style={{ backgroundColor: "#AA77FF" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }
}

export default RegisterEvent;
