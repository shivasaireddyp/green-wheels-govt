import React from 'react'
import { loginContext } from "../../contexts/loginContext";
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function BookingHistory() {
  const location = useLocation();

  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
    if(userLoginStatus){
      return (
        <div className='text-light'>
            <h1 className='text-center fw-bold mt-4 mb-5 '>Booking History</h1>
        </div>
      )
    }
    else{
      return(
      <Navigate to={"/login"} replace state={{from: location}} />
      )
    }
  
}

export default BookingHistory