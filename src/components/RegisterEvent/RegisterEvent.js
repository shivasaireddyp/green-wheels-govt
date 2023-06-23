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
import

function RegisterEvent() {
  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
  const { selectedAuditorium } = useContext(AuditoriumContext);
  let navigate = useNavigate();
  let location = useLocation();
  let [apiError, setApiError] = useState("");
  let [selectedTimeError,setSelectedTimeError] = useState(null)

  let [selectAudi, setSelectAudi] = useState(null);
  let [selectDate, setSelectDate] = useState(null);
  let [selectStartTime, setSelectStartTime] = useState("");
  let [selectEndTime, setSelectEndTime] = useState("");

  let starttime = new Date(selectStartTime)
  // let endtime = new Date(selectEndTime)

  console.log(starttime)
  console.log(endtime)


  console.log(selectAudi);
  console.log(selectDate);
  console.log(selectStartTime);
  console.log(selectEndTime);

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

  // console.log(audis)

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let addEvent = (newEvent) => {
    console.log(newEvent);

    axios
      .post("http://localhost:4000/events-api/register-event", newEvent)
      .then((response) => {
        if (response.status === 201) {
          console.log("good response");
          navigate("/event-guidelines");
        }
        if (response.status !== 201) {
          setApiError(response.data.message);
        }
      })
      .catch((err) => {
        if (err.response) {
          setApiError(err.message);
        }
        //the client never received a response
        else if (err.request) {
          setApiError(err.message);
        }
        //for other error
        else {
          setApiError(err.message);
        }
      });
  };

  if (userLoginStatus) {
    return (
      <div className="container text-light">
        <div className="card bg-dark" style={{ borderRadius: "33px" }}>
          <h1 className="text-center fw-bold m-3">Register an Event</h1>
          <form className="m-auto p-3 w-75" onSubmit={handleSubmit(addEvent)}>
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
                  <p className="text-primary fs-6">
                    <TbAlertCircle /> required field
                  </p>
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
                  <p className="text-primary fs-6">
                    <TbAlertCircle /> required field
                  </p>
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
                <p className="text-primary fs-6">
                  <TbAlertCircle /> required field
                </p>
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
                <p className="text-primary fs-6">
                  <TbAlertCircle /> required field
                </p>
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
                <p className="text-primary fs-6">
                  <TbAlertCircle /> required field
                </p>
              )}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="headphone">
                Event Organiser Phone Number (POC):
              </label>
              <input
                type="tel"
                className="form-control"
                id="headphone"
                pattern="[0-9]{10}"
                // placeholder="name@example.com"
                {...register("headphone", { required: true })}
              />
              <p className="text-muted">Enter a 10 digit phone number.</p>
              {errors.headmail?.type === "required" && (
                <p className="text-primary fs-6">
                  <TbAlertCircle /> required field
                </p>
              )}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="auditorium">Select Auditorium:</label>
              <select
                className="form-control"
                id="auditorium"
                {...register("auditorium", {
                  required: true,
                  onChange: (e) => {
                    setSelectAudi(e.target.value);
                  },
                })}
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
              <p className="text-muted">
                Please check your requirements and select perfect venue for your
                event
                <Link className="text-decoration-none" to="/">
                  {" "}
                  here
                </Link>
              </p>
              {errors.auditorium?.type === "required" && (
                <p className="text-primary fs-6">
                  <TbAlertCircle /> required field
                </p>
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
                {...register("eventdate", {
                  required: true,
                  onChange: (e) => {
                    setSelectDate(e.target.value);
                  },
                })}
              />
              {errors.eventdate?.type === "required" && (
                <p className="text-primary fs-6">
                  <TbAlertCircle /> required field
                </p>
              )}
              <Link className="text-decoration-none" to="/upcoming-events">
                <p style={{ color: "#AA77FF" }}>Refer Upcoming Events</p>
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
                  {...register("eventstarttime", {
                    required: true,
                    onChange: (e) => {
                      setSelectStartTime(e.target.value);
                    },
                  })}
                />
                {errors.eventstarttime?.type === "required" && (
                  <p className="text-primary fs-6">
                    <TbAlertCircle /> required field
                  </p>
                )}
              </div>
              <div className="form-group col mb-4">
                <label htmlFor="eventendtime">Select End Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="eventendtime"
                  placeholder=""
                  {...register("eventendtime", {
                    required: true,
                    onChange: (e) => {
                      setSelectEndTime(e.target.value);
                    },
                  })}
                />
                {errors.eventendtime?.type === "required" && (
                  <p className="text-primary fs-6">
                    <TbAlertCircle /> required field
                  </p>
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
