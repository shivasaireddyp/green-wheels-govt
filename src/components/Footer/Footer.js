import React from 'react'
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillMail} from "react-icons/ai"

function Footer() {
    return (
        <div style={{marginTop: "5%"}} >
            <footer className='bg-dark text-white pt-5 pb-4'>
                <div className='container text-center text-md-left'>
                    <div className='row text-center text-md-left'>
                        <div className='col-md-7 col-lg-7 col-xl-3 mx-auto mt-3'>
                            <h5>About Us:</h5>
                            <p>At LEM we provide bookings of auditoriums at VNRVJIET College, such as KS auditorium, where a selected list of committees can book auditoriums. If you have any queries or concerns, feel free to contact us.
Contact info: 8328552183</p>
                        </div>
                        <div className='col-md-2 col-lg-3 col-xl-2 mx-auto mt-3'>
                            <h5>Contact us:</h5>
                            <div><a href="#"><AiOutlineTwitter />Twitter</a></div>
                            <div><a href="#"><AiFillInstagram />Instagram</a></div>
                            <div><a href="#"><AiFillFacebook />Facebook</a></div>
                            <div><a href="#"><AiFillMail />chola@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer