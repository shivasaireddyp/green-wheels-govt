import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import events from "../../../src/db.json"
import { useNavigate } from 'react-router-dom'


function UpcomingEvents() {
  let navigate = useNavigate()
  return (
    <div>
      <h1 className='text-center mt-4 mb-4' style={{}}>Upcoming Events</h1>
      <div className='d-flex flex-wrap'>
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
      </div>
    </div>
  )
}

export default UpcomingEvents