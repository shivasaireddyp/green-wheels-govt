import React from 'react'
import "./AudiBooking.css"
import Audis from './../AudiBooking/audis.json'
import { useNavigate } from 'react-router-dom'
function AudiBooking() {
    let navigate = useNavigate()
    return (
        <div style={{backgroundColor: "#edede9"}} >
            <div className='for-box' style={{marginTop: '10%', marginBottom: "10%"}}>
                <h1 style={{fontSize: "10vh"}} className='text-center'>Welcome to LEM...</h1>
                <h3 className='text-center'>Lyrik Event Management</h3>
                <p className='text-center'>One destination to make your events super successful!<br/>Check out upcoming events and functions</p>
            </div>
            <div>
                <h1 className='text-center mt-4'>Auditoriums</h1>
                <p className='text-center'>Check out the available auditoriums, more additions soon!</p>
            </div>
            {
                Audis.auditoriums.map((audi, index)=><div className='col-sm-12 col-md-10 m-auto col-l-10' key={index}>
                    <div className='card mb-5 bg-dark p-2'>
                        <img className='props text-white mb-4 ' src={audi.photo}></img>
                        <h2 className='props text-white'>Name - {audi.name}</h2>
                        <h3 className='props text-white'>Capacity : {audi.capacity}</h3>
                        <h3 className='props text-white'>Location : {audi.location}</h3>
                        <h3 className='props text-white'>Cost per hour : {audi.cost}</h3>
                        <button onClick={()=>navigate('/register-event')} className='btn props mt-4  mb-4' style={{backgroundColor: "#AA77FF"}}>Book now</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default AudiBooking