import React, { useContext, useEffect } from 'react'
import "./AudiBooking.css"
import { useState } from 'react'
import Audis from './../AudiBooking/audis.json'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import RegisterEvent from '../RegisterEvent/RegisterEvent'
import { AuditoriumContext } from '../../contexts/AuditoriumContext'
function AudiBooking() {
    const {selectAuditorium} = useContext(AuditoriumContext)
    let navigate = useNavigate()
    let [audis,setAudis] = useState([])
    useEffect(()=>{
    const fetchData = async()=>{
        axios.get("http://localhost:4000/audis-api/audis")
        .then((response)=>{
        // console.log(response.data.payload)
            setAudis([...response.data.payload])
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    fetchData();
    },[setAudis])

    const handleAuditoriumClick = (audi)=>{
        selectAuditorium(audi)
        navigate('/user-profile/register-event')
    }

    console.log(audis)

    const handleClick=(audi)=>{
        // console.log(audi)
        // setSelectedAudi(audi)
        // navigate('/user-profile/register-event')
        // setIsClicked(true)
    }

    // console.log(selectedAudi)

    return (
        //    <audisContext.Provider value={selectedAudi}>
            // {children}
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
                audis.map((audi)=><div className='col-sm-12 col-md-10 m-auto col-l-10' key={audis._id}>
                    <div className='card mb-5 bg-dark p-2'>
                        <img className='props text-white mb-4 ' src={audi.image}></img>
                        <h2 className='props text-white'>Name - {audi.name}</h2>
                         <h3 className='props text-white'>Capacity : {audi.capacity}</h3>
                         <h3 className='props text-white'>Location : {audi.address}</h3>
                        <h3 className='props text-white'>Cost per hour : {audi.cost}</h3>
                        <h3 className='props text-white'>Contact : {audi.contact}</h3>
                        <button className='btn props mt-4  mb-4' onClick={()=>handleAuditoriumClick(audi)} style={{backgroundColor: "#AA77FF"}}>Book now</button>
                        {/* {isClicked && (
                            <audisProvider value={audi}>
                                <RegisterEvent />
                            </audisProvider>
                        )} */}

                     </div>
                 </div>)
            }
            </div>
        //    </audisContext.Provider>
    )
}

export default AudiBooking