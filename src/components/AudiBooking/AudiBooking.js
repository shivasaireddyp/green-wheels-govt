import React, { useContext, useEffect } from "react";
import "./AudiBooking.css";
import { useState } from "react";
import Audis from "./../AudiBooking/audis.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterEvent from "../RegisterEvent/RegisterEvent";
import { AuditoriumContext } from "../../contexts/AuditoriumContext";
import { Link } from "react-router-dom";
function AudiBooking() {
  const { selectAuditorium } = useContext(AuditoriumContext);
  let navigate = useNavigate();
  let [audis, setAudis] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:4000/audis-api/audis")
        .then((response) => {
          // console.log(response.data.payload)
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
    navigate("/user-profile/register-event");
  };

  //   console.log(audis);

  const handleClick = (audi) => {};

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
          One destination to make your events super successful!
          <br />
          Check out upcoming events and functions
        </p>
        <p className="text-center text-light">
          Not registered with us? <Link to="/register">Join now!</Link>
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
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {audis.map((audi) => (
            <div key={audis._id}>
              <div className="col bg-dark for-cards ">
                <div className="h-50 text-light">
                  <div>
                    <img
                      className=" mb-1 p-2"
                      style={{
                        height: "300px",
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
                    <a className="d-block float-start mb-2" href="#">
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
