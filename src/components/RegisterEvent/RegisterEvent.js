import React from 'react'
import { useForm } from 'react-hook-form'
import Audis from './../AudiBooking/audis.json'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function RegisterEvent() {
    // let navigate = useNavigate()

    // let { register, handleSubmit } = useForm()
    // function formSubmit(Obj){
    //     fetch("http://localhost:4000/eventsdetails",{
    //         method: "POST",
    //         headers :{"Content-Type":"application/json"},
    //         body: JSON.stringify(Obj)
    //     })
    //     .then(res => res.json())
    //     .then(msg => console.log(msg))
    //     .catch(err => console.log("error occured is",err))
    // }
    return (
        <div>
            <h1 className='text-center m-4'>Register for an Event</h1>
            {/* <div>
                <form className='w-75 m-auto' onSubmit={handleSubmit(formSubmit)}>
                <div className="form-group mb-4">
                        <label htmlFor="committee">Select Committee:</label>
                        <select className="form-control" id="committee" defaultValue="DISABLED" placeholder="Select your Committee:" {...register("committee")}>
                        </select>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="eventname">Enter event name:</label>
                        <input type="text" className="form-control" id="eventname" placeholder="" {...register("eventname")}/>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="description">Event Description:</label>
                        <input type="text" className="form-control" id="description" placeholder="" {...register("description")}/>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="headmail">Committee Head Email address:</label>
                        <input type="email" className="form-control" id="headmail" placeholder="name@example.com" {...register("headmail")}/>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="auditorium">Select Auditorium:</label>
                        <select className="form-control" id="auditorium" {...register("auditorium")}>
                            {
                                Audis.auditoriums.map((audi,index)=><option key={index}>{audi.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="eventdate" className='font-weight-bold'>Select a date:</label>
                        <input type="date" className="form-control" id="eventdate" {...register("eventdate")}/>
                        <div><button className='btn mt-1' style={{backgroundColor:"#62CDFF"}} onClick={()=>navigate("/upcoming-events")} to="upcoming-events/">Check out Upcoming Events</button></div>
                    </div>
                    <div>
                        <h3>Details:</h3>
                    </div>
                    <div className='m-auto'>
                        <button className="btn text-white" style={{backgroundColor:"#AA77FF"}} onClick={handleSubmit(formSubmit)}>Submit</button>
                    </div>
                </form>
            </div> */}
        </div>
    )
}

export default RegisterEvent;