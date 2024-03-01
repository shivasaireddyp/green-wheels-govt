import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { loginContext } from "../../contexts/loginContext";
import axios from "axios";

import { Link } from "react-router-dom";
function Home() {
  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
  let location = useLocation();
  let navigate = useNavigate();

  return (
    <div>
      <div className="">
        <div className="container" style={{ marginBottom: "3%" }}>
          <div className="row align-items-center h-100 py-5">
            <div className="col-lg-4 col-sm-12 col-md-6 col-xs-12 order-md-1 align-items-center">
              <h1 style={{ fontSize: "5vw" }} className=" text-light mb-2">
                Discover. Drive. Explore.
              </h1>
              <h2 className=" fw-bold text-light">Green Wheels</h2>
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
                      src="data:image/jpeg;base64,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  "
                      className="d-block w-100 rounded"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      {/* <h5>Anantagiri Hills, Vikarabad.</h5> */}
                      <Link to = "trending-places/anantagiri-hills/" className="link-offset-2"><h5>Anantagiri Hills, Vikarabad.</h5></Link>
                      <p>
                      Ancient temples, dense forest, Musi river, trekking paradise, coffee.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DF3a51nh4_b3gYVgpX5oX0uEpgt9L-WCow&usqp=CAU"
                      className="d-block w-100 rounded"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <Link to="trending-places/lakshwadeep" className="link-offset-2 link-underline link-underline-opacity-0"><h5>
                        Lakshwadeep Islands, India.
                      </h5></Link>
                      <p>
                      Tropical archipelago, pristine beaches, coral reefs, adventure sports, untouched beauty.
                      </p>
                    </div>
                  </div>
                  
                  <div className="carousel-item">
                    <img
                      src="data:image/jpeg;base64,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"
                      className="d-block w-100 rounded"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <Link to='trending-places/kuntala-falls' className="link-offset-2 link-underline link-underline-opacity-0"><h5>Kuntala Warterfalls, Adilabad.</h5></Link>
                      <p>Highest waterfall in Telangana, scenic beauty, Kadam river, temple.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
