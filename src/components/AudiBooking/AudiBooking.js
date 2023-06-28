import React, { useContext, useEffect } from "react";
import "./AudiBooking.css";
import { useState } from "react";
import Audis from "./../AudiBooking/audis.json";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { loginContext } from "../../contexts/loginContext";
import axios from "axios";
import { AuditoriumContext } from "../../contexts/AuditoriumContext";

import { Link } from "react-router-dom";
function AudiBooking() {
  const { selectAuditorium } = useContext(AuditoriumContext);
  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
  let location = useLocation();
  let navigate = useNavigate();
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

  const handleAuditoriumClick = (audi) => {
    selectAuditorium(audi);
    navigate("/register-event");
  };

  return (
    <div>
      <div className="">
        <div className="container" style={{ marginBottom: "3%" }}>
          <div className="row align-items-center h-100 py-5">
            <div className="col-lg-4 col-sm-12 col-md-6 col-xs-12 order-md-1 align-items-center">
              <h1 style={{ fontSize: "5vw" }} className=" text-light mb-2">
                Discover. Book. Experience.
              </h1>
              <h2 className=" fw-bold text-light">Lyrik Event Management</h2>
              <p className=" text-light">
                Not registered with us?{" "}
                <Link className="text-decoration-none" to="/register">
                  Join Now!
                </Link>
              </p>
            </div>
            <div className="col-lg-8 col-sm-12 col-md-6 col-xs-12 order-md-2 d-lg-block">
              <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://images.unsplash.com/photo-1504680177321-2e6a879aac86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=100"
                      className="d-block w-100 rounded"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>
                        "Elevating Experiences, Crafting Unforgettable Moments."
                      </h5>
                      <p>
                        We create unforgettable events that exceed your
                        expectations.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGV2ZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=100"
                      className="d-block w-100 rounded"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>"Transforming Visions into Extraordinary Events."</h5>
                      <p>
                        We are experts in all aspects of event planning, from
                        start to finish.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=100"
                      className="d-block w-100 rounded"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>"Let's Create Memories Together."</h5>
                      <p>Contact us today to start planning your next event.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center fw-bold mt-4 text-light">
          Auditoriums & Theaters
        </h1>
        <p className="text-center text-light  ">
          Check out the available auditoriums, more additions soon!
        </p>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {audis.map((audi) => (
            <div key={audis._id}>
              <div className="col bg-dark for-cards">
                <div className="h-25 text-light">
                  <div>
                    <img
                      className=" mb-1 p-1"
                      style={{
                        height: "230px",
                        width: "100%",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                      src={audi.image}
                    ></img>
                  </div>
                  <div className="props">
                    <h2 className="">{audi.name}</h2>
                    <h6 className="m-0 mb-1 text-decoration-underline">
                      Key Specifications:
                    </h6>
                    <p className="m-0 ">Capacity : {audi.capacity}</p>
                    <p className="m-0 ">Location : {audi.address}</p>
                    <p className="m-0 ">Cost : {audi.cost}</p>
                    <p className="m-0 ">Contact : {audi.contact}</p>
                  </div>
                  <div className="props">
                    <a
                      className="d-block float-start mt-1 text-decoration-none"
                      href="#"
                    >
                      Check other details and past events here
                    </a>
                    <button
                      className="btn mb-2 w-100"
                      onClick={() => handleAuditoriumClick(audi)}
                      style={{ backgroundColor: "#AA77FF" }}
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AudiBooking;
