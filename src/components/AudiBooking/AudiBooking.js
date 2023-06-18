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
    navigate('/register-event')
    // <Navigate to="/register-event" state={{from: location}}/>
  };

  return (
    <div>
      <div
        className="for-box"
        style={{ marginTop: "10%", marginBottom: "10%" }}
      >
        <h1 style={{ fontSize: "7vw" }} className="text-center text-light mb-2">
          Discover. Book. Experience.
        </h1>
        <h2 className="text-center fw-bold text-light">
          Lyrik Event Management
        </h2>
        <h5 className="text-center text-light">
          "Elevating Experiences, Crafting Unforgettable Moments"
        </h5>
        <p className="text-center text-light">
          Not registered with us?{" "}
          <Link className="text-decoration-none" to="/register">
            Join Now!
          </Link>
        </p>
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
        <div className="row row-cols-1 row-cols-md-3">
          {audis.map((audi) => (
            <div key={audis._id}>
              <div className="col bg-dark for-cards ">
                <div className="h-50 text-light">
                  <div>
                    <img
                      className=" mb-1 p-2"
                      style={{
                        height: "250px",
                        width: "100%",
                        borderTopLeftRadius: "25px",
                        borderTopRightRadius: "25px",
                      }}
                      src={audi.image}
                    ></img>
                  </div>
                  <div className="props">
                    <h2 className="">{audi.name}</h2>
                    <p className=" ">Capacity : {audi.capacity}</p>
                    <p className=" ">Location : {audi.address}</p>
                    <p className=" ">Cost : {audi.cost}</p>
                    <p className=" ">Contact : {audi.contact}</p>
                  </div>
                  <div className="text-center props">
                    <a
                      className="d-block float-start mb-2 text-decoration-none"
                      href="#"
                    >
                      Check out past events here
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
