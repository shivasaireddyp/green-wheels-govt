import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import events from "../../../src/db.json";
import { useNavigate } from "react-router-dom";

function UpcomingEvents() {
  let navigate = useNavigate();
  return (
    <div className="text-light">
      <h1 className="text-center fw-bold mt-4 mb-4">Upcoming Events</h1>
      <div className="container">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide rounded shadow-4-strong"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1613210434051-4b00d62d03fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1ZGl0b3JpdW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=100"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=100" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=100" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <div className='d-flex flex-wrap'>
      {
          events.eventsdetails.map((event, index) => <div className='container row-col-sm-12 col-md-4 m-auto col-l-4 cols-row-md-3' key={index}>
            <div className='card mb-5 p-4 bg-dark text-white' style={{borderRadius:"20px"}}>
                <h5>Event Name : {event.eventname}</h5>
                <h5>Organising Committee : {event.committee}</h5>
                <h5>Venue: <a href="#">{event.auditorium}</a></h5>
                <h5>Event Date : {event.eventdate}</h5>
                <h5>Contact Organiser : <a href="#">{event.headmail}</a></h5>
                <button onClick={navigate('coming-soon/')} className='btn mb-2 mt-3' style={{backgroundColor:"#AA77FF"}}>Learn more</button>
            </div>
          </div>)
        }
      </div> */}
    </div>
  );
}

export default UpcomingEvents;
