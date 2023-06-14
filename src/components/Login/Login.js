import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../../contexts/loginContext";
// import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
// import { useState } from 'react'

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
  // if(location.state?.from){
  //   navigate(location.state.from)
  // }

  //error state
  let [pageHead, setPageHead] = useState("Login");

  //navigate

  //use form hook
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //user login
  const handleUserLogin = (userCredObj) => {
    //  console.log(userCredObj)
    loginUser(userCredObj);
  };

  //  console.log(location?.state?.from.pathname)

  useEffect(() => {
    if (userLoginStatus == true) {
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/user-profile");
      }
      console.log("login successful");
    } else {
      console.log("not success");
    }
  }, [userLoginStatus]);

  //  if(location.state.from.pathname==='/user-profile/register-event'){
  //   // setPageHead("Login to Continue")
  //  }

  return (
    <div className="mt-5">
      <div className=" d-flex flex-row flex-wrap justify-content-center">
        <div className="justify-content-center shadow-lg align-items-center bg-dark card rounded-0 login-sideimg ">
          <h1 className="text-light bg-dark">Welcome to LEM!</h1>
        </div>
        <div className="card shadow-lg rounded-0 login-form">
          <div className="card-body rounded-0 login-bg">
            {/* <h3 className="card-title text-center">Log in to Codepen</h3> */}
            {location?.state?.from.pathname ==
            "/user-profile/register-event" ? (
              <h1 className="text-light text-center">Login to Continue</h1>
            ) : (
              <h1 className="text-center text-light">Login</h1>
            )}
            {error ? (
              <p className="display-3 text-danger text-center">{error}</p>
            ) : (
              ""
            )}
            <div className="card-text">
              <form onSubmit={handleSubmit(handleUserLogin)}>
                <div className="form-group mb-3">
                  <label className="text-light" for="username">
                    Username
                  </label>
                  {/* <input type="text" className="form-control form-control-sm" id="username" aria-describedby="emailHelp" /> */}
                  <input
                    type="text"
                    id="username"
                    className="form-control form-control-sm"
                    placeholder="e.g. John"
                    aria-describedby="usernameHelp"
                    {...register("username", { required: true })}
                  />
                  {/* validation errors for name */}
                  {errors.username?.type === "required" && (
                    <p className="text-danger fw-bold fs-5">
                      * Username is required
                    </p>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label className="text-light" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="*********"
                    id="password"
                    className="form-control form-control-sm"
                    {...register("password", { required: true })}
                  />
                  <a href="#" style={{ float: "right", fontSize: "12px" }}>
                    Forgot password?
                  </a>
                  {/* validation errors for name */}
                  {errors.password?.type === "required" && (
                    <p className="text-danger fw-bold fs-5">
                      * Password is required
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn d-flex mx-auto"
                  style={{ backgroundColor: "#AA77FF" }}
                >
                  Log in
                </button>
                <div className="sign-up text-light">
                  Don't have an account? <Link to="/register">Create One</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="d-flex justify-content-center ">
          <div>
            <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=445&q=80" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=445&q=80" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Login;
