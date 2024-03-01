import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { loginContext } from "../../contexts/loginContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  // let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
  //   useContext(loginContext);

  //error state
  let [pageHead, setPageHead] = useState("Login");

  //navigate

  //use form hook
  // let {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // //user login
  const handleUserLogin = (userCredObj) => {
     console.log(userCredObj)
    // loginUser(userCredObj);
  };

  // useEffect(() => {
  //   if (userLoginStatus == true) {
  //     if (location.state?.from) {
  //       navigate(location.state.from);
  //     } else {
  //       navigate("/user-profile");
  //     }
  //     // console.log("login successful");
  //   } else {
  //     // console.log("not success");
  //   }
  // }, [userLoginStatus]);

  return (
    <div>
      <section className="mt-4">
        <div className="container h-100">
          {/* {error.length !== 0 && (
            <p className="display-6 text-light text-center">{error}</p>
          )} */}
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-light bg-dark"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-5 order-2 order-lg-1">
                      {/* {location?.state?.from.pathname == "/register-event" || */}
                      {/* location?.state?.from.pathname == "/booking-history" ? ( */}
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login to Continue
                        </p>
                      {/* ) : (
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login
                        </p>
                      )}
                      {error ? (
                        <p className="text-light text-center">{error}</p>
                      ) : (
                        ""
                      )} */}

                      <form
                        // onSubmit={handleSubmit(handleUserLogin)}
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
                              // {...register("username", { required: true })}
                            />
                            {/* {errors.username?.type === "required" && ( */}
                              <p className="text-primary fs-6">
                                *required field
                              </p>
                            {/* )} */}
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
                              // {...register("password", { required: true })}
                            />
                            {/* {errors.password?.type === "required" && ( */}
                              <p className="text-primary fs-6">
                                *required field
                              </p>
                            {/* )} */}
                            <a href="#" className="text-decoration-none">
                              Forgot password
                            </a>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            className="btn btn-lg"
                            style={{ backgroundColor: "#AA77FF" }}
                          >
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
                        // https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=100
                        src="https://img.freepik.com/free-vector/tiny-people-carrying-key-open-padlock_74855-16292.jpg?w=1060&t=st=1687098245~exp=1687098845~hmac=6c841eb7fe058ea1ee08258846cfedc0f15fb7a06459615109ca783d91c078f5"
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
  );
}

export default Login;