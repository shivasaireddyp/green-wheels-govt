import React, { useContext, useEffect } from "react";
import "./AudiBooking.css";
import { useState } from "react";
import Audis from "./../AudiBooking/audis.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterEvent from "../RegisterEvent/RegisterEvent";
import { AuditoriumContext } from "../../contexts/AuditoriumContext";
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
        <h1 style={{ fontSize: "10vw" }} className="text-center text-light">
          Welcome to LEM
        </h1>
        <h3 className="text-center text-light">Lyrik Event Management</h3>
        <h5 className="text-center text-light">
          Elevating Experiences, Crafting Unforgettable Moments
        </h5>
        <p className="text-center text-light">
          One destination to make your events super successful!
          <br />
          Check out upcoming events and functions
        </p>
      </div>
      <div>
        <h1 className="text-center mt-4 text-light">Auditoriums</h1>
        <p className="text-center text-light  ">
          Check out the available auditoriums, more additions soon!
        </p>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {audis.map((audi) => (
            <div key={audis._id}>
              <div className="col">
                <div className="card h-100 p-2 bg-dark text-light">
                  <img
                    className=" mb-3 "
                    style={{ height: "300px" }}
                    src={audi.image}
                  ></img>
                  <h2 className="mb-1 ">{audi.name}</h2>
                  <p className=" ">Capacity : {audi.capacity}</p>
                  <p className=" ">Location : {audi.address}</p>
                  <p className=" ">Cost : {audi.cost}</p>
                  <p className=" ">Contact : {audi.contact}</p>
                  <button
                    className="btn props mt-4  mb-4"
                    onClick={() => handleAuditoriumClick(audi)}
                    style={{ backgroundColor: "#AA77FF" }}
                  >
                    Book now
                  </button>
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
