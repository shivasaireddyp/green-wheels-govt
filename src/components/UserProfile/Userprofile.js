import React from 'react'
import { useContext } from 'react'
import {loginContext} from '../../contexts/loginContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Outlet,Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Userprofile() {
  let navigate = useNavigate();
  let location = useLocation();
  let [currentUser,error,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)
  if(userLoginStatus){
    return(
      <div>
        <h2>Dashboard</h2>
        <p>Welcome, {currentUser.username}</p>
        <img src={currentUser.image} />
        <Outlet />
      </div>
    )
  }
  else{
    return (
      <Navigate to={'/login'} replace state={{from:location}} />
    )
  }

  // return (
    // <div>
    //   <h2>Dashboard</h2>
    //   <p>Welcome, {currentUser.username}</p>
    //   {/* <Link to="/user-profile/register-event">
    //     <button>Register Event with us</button>
    //   </Link> */}
      
    //     if(userLoginStatus){
    //       <Outlet />
    //     }
    //     else{
    //       <Navigate to={'/login'}/>
    //     }
      
    //   {/* <button className='btn btn-primary' onClick={navigate('/user-profile/register-event/')}>Register an event with us</button> */}
    // </div>
  // )
}

export default Userprofile