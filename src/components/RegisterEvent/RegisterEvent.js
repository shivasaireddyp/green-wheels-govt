import React from 'react'
import { useForm } from 'react-hook-form'
import Audis from './../AudiBooking/audis.json'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function RegisterEvent() {
    // let location = useLocation()
    // let navigate = useNavigate()
    let {register,handleSubmit} = useForm();

    let addEvent=(newEvent)=>{
        console.log(newEvent)
    }
    return (
        <div>
            <h1 className='text-center m-4'>Register for an Event</h1>
            <div>
                <form className='w-75 m-auto' onSubmit={handleSubmit(addEvent)}>
                <div className="form-group mb-4">
                        <label htmlFor="committee">Select Committee:</label>
                        <select className="form-control" id="committee" defaultValue="DISABLED" placeholder="Select your Committee:" {...register("committee",{required:true})}>
                            <option>default</option>
                        </select>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="eventname">Enter event name:</label>
                        <input type="text" className="form-control" id="eventname" placeholder="" {...register("eventname",{required:true})}/>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="description">Event Description:</label>
                        <input type="text" className="form-control" id="description" placeholder="" {...register("description",{required:true})}/>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="headmail">Committee Head Email address:</label>
                        <input type="email" className="form-control" id="headmail" placeholder="name@example.com" {...register("headmail",{required:true})}/>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="auditorium">Select Auditorium:</label>
                        <select className="form-control" id="auditorium" {...register("auditorium",{required:true})}>
                            <option value="" disabled selected>select an option</option>
                            {
                                Audis.auditoriums.map((audi,index)=><option key={index}>{audi.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="eventdate" className='font-weight-bold'>Select a date:</label>
                        <input type="date" className="form-control" id="eventdate" {...register("eventdate",{required:true})}/>
                        {/* <div><button className='btn mt-1' style={{backgroundColor:"#62CDFF"}} onClick={()=>navigate("/upcoming-events")} to="upcoming-events/">Check out Upcoming Events</button></div> */}
                    </div>
                    <div>
                        <h3>Details:</h3>
                    </div>
                    <div className='m-auto'>
                        <button className="btn text-white" style={{backgroundColor:"#AA77FF"}}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterEvent;