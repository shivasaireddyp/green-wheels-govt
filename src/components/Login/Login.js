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
      // console.log("login successful");
    } else {
      // console.log("not success");
    }
  }, [userLoginStatus]);

  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          {error.length !== 0 && (
            <p className="display-6 text-light text-center">{error}</p>
          )}
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-light bg-dark"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-5 order-2 order-lg-1">
                      {location?.state?.from.pathname ==
                      "/user-profile/register-event" ? (
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login to Continue
                        </p>
                      ) : (
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login
                        </p>
                      )}
                      {error ? (
                        <p className="display-3 text-danger text-center">
                          {error}
                        </p>
                      ) : (
                        ""
                      )}

                      <form
                        onSubmit={handleSubmit(handleUserLogin)}
                        className="mx-1 mx-md-4"
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          {/* <i className="fas fa-user fa-lg me-3 fa-fw"></i> */}
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="username"
                              className="form-control"
                              placeholder="Username"
                              {...register("username", { required: true })}
                            />
                            {errors.username?.type === "required" && (
                              <p className="text-light fs-6">*required field</p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          {/* <i className="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control mb-2"
                              placeholder="Password"
                              {...register("password", { required: true })}
                            />
                            <a href="#" className="text-decoration-none">
                              Forgot password
                            </a>
                            {errors.password?.type === "required" && (
                              <p className="text-light fs-6">*required field</p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button className="btn btn-lg" style={{ backgroundColor: "#AA77FF" }}>
                            Log in
                          </button>
                        </div>
                        <div className="sign-up d-block text-light mt-1">
                          Dont have an account?{" "}
                          <Link className="text-decoration-none" to="/register">
                            Create One
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=100"
                        className="img-fluid rounded"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <div className="mt-5">
    //   <div className=" d-flex flex-row flex-wrap justify-content-center">
    //     <div className="justify-content-center shadow-lg align-items-center bg-dark card rounded-0 login-sideimg ">
    //       <h1 className="text-light fw-bold bg-dark">Welcome to LEM!</h1>
    //     </div>
    //     <div className="card shadow-lg rounded-0 login-form">
    //       <div className="card-body rounded-0 login-bg">
    //         {/* <h3 className="card-title text-center">Log in to Codepen</h3> */}
    //         {location?.state?.from.pathname ==
    //         "/user-profile/register-event" ? (
    //           <h1 className="text-light fw-bold text-center">Login to Continue</h1>
    //         ) : (
    //           <h1 className="text-center fw-bold text-light">Login</h1>
    //         )}
    //         {error ? (
    //           <p className="display-3 text-danger text-center">{error}</p>
    //         ) : (
    //           ""
    //         )}
    //         <div className="card-text">
    //           <form onSubmit={handleSubmit(handleUserLogin)}>
    //             <div className="form-group mb-3">
    //               <label className="text-light" for="username">
    //                 Username
    //               </label>
    //               {/* <input type="text" className="form-control form-control-sm" id="username" aria-describedby="emailHelp" /> */}
    //               <input
    //                 type="text"
    //                 id="username"
    //                 className="form-control form-control-sm"
    //                 placeholder="e.g. John"
    //                 aria-describedby="usernameHelp"
    //                 {...register("username", { required: true })}
    //               />
    //               {/* validation errors for name */}
    //               {errors.username?.type === "required" && (
    //                 <p className="text-danger fw-bold fs-5">
    //                   * Username is required
    //                 </p>
    //               )}
    //             </div>
    //             <div className="form-group mb-3">
    //               <label className="text-light" for="password">
    //                 Password
    //               </label>
    //               <input
    //                 type="password"
    //                 placeholder="*********"
    //                 id="password"
    //                 className="form-control form-control-sm"
    //                 {...register("password", { required: true })}
    //               />
    //               <a href="#" style={{ float: "right", fontSize: "12px" }}>
    //                 Forgot password?
    //               </a>
    //               {/* validation errors for name */}
    //               {errors.password?.type === "required" && (
    //                 <p className="text-danger fw-bold fs-5">
    //                   * Password is required
    //                 </p>
    //               )}
    //             </div>
    //             <button
    //               type="submit"
    //               className="btn d-flex mx-auto"
    //               style={{ backgroundColor: "#AA77FF" }}
    //             >
    //               Log in
    //             </button>
    //             <div className="sign-up text-light">
    //               Don't have an account? <Link to="/register">Create One</Link>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <div className="">
    //     <div className="d-flex justify-content-center ">
    //       <div>
    //         <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=445&q=80" />
    //       </div>
    //       <div>
    //         <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=445&q=80" />
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
  );
}

export default Login;
