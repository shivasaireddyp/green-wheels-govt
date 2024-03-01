// import { useRef, useState, useEffect } from "react";
// // import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import axios from '../api/axios';
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

// const Register = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [validName, setValidName] = useState(false);
//     const [userFocus, setUserFocus] = useState(false);

//     const [pwd, setPwd] = useState('');
//     const [validPwd, setValidPwd] = useState(false);
//     const [pwdFocus, setPwdFocus] = useState(false);

//     const [matchPwd, setMatchPwd] = useState('');
//     const [validMatch, setValidMatch] = useState(false);
//     const [matchFocus, setMatchFocus] = useState(false);

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setValidName(USER_REGEX.test(user));
//     }, [user])

//     useEffect(() => {
//         setValidPwd(PWD_REGEX.test(pwd));
//         setValidMatch(pwd === matchPwd);
//     }, [pwd, matchPwd])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd, matchPwd])

//     const handleSubmit = async (e) => {
//         console.log(e)
//         // e.preventDefault();
//         // if button enabled with JS hack
//         // const v1 = USER_REGEX.test(user);
//         // const v2 = PWD_REGEX.test(pwd);
//         // if (!v1 || !v2) {
//         //     setErrMsg("Invalid Entry");
//         //     return;
//         // }
//         // try {
//         //     const response = await axios.post(REGISTER_URL,
//         //         JSON.stringify({ user, pwd }),
//         //         {
//         //             headers: { 'Content-Type': 'application/json' },
//         //             withCredentials: true
//         //         }
//         //     );
//         //     // TODO: remove console.logs before deployment
//         //     console.log(JSON.stringify(response?.data));
//         //     //console.log(JSON.stringify(response))
//         //     setSuccess(true);
//         //     //clear state and controlled inputs
//         //     setUser('');
//         //     setPwd('');
//         //     setMatchPwd('');
//         // } catch (err) {
//         //     if (!err?.response) {
//         //         setErrMsg('No Server Response');
//         //     } else if (err.response?.status === 409) {
//         //         setErrMsg('Username Taken');
//         //     } else {
//         //         setErrMsg('Registration Failed')
//         //     }
//         //     errRef.current.focus();
//         // }
//     }

//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>Success!</h1>
//                     <p>
//                         <a href="#">Sign In</a>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Register</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">
//                             Username:
//                             {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
//                         </label>
//                         <input
//                             type="text"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             value={user}
//                             required
//                             aria-invalid={validName ? "false" : "true"}
//                             aria-describedby="uidnote"
//                             onFocus={() => setUserFocus(true)}
//                             onBlur={() => setUserFocus(false)}
//                         />
//                         <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//                             {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
//                             4 to 24 characters.<br />
//                             Must begin with a letter.<br />
//                             Letters, numbers, underscores, hyphens allowed.
//                         </p>


//                         <label htmlFor="password">
//                             Password:
//                             {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                             aria-invalid={validPwd ? "false" : "true"}
//                             aria-describedby="pwdnote"
//                             onFocus={() => setPwdFocus(true)}
//                             onBlur={() => setPwdFocus(false)}
//                         />
//                         <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//                             {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
//                             8 to 24 characters.<br />
//                             Must include uppercase and lowercase letters, a number and a special character.<br />
//                             Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//                         </p>


//                         <label htmlFor="confirm_pwd">
//                             Confirm Password:
//                             {/* <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} /> */}
//                         </label>
//                         <input
//                             type="password"
//                             id="confirm_pwd"
//                             onChange={(e) => setMatchPwd(e.target.value)}
//                             value={matchPwd}
//                             required
//                             aria-invalid={validMatch ? "false" : "true"}
//                             aria-describedby="confirmnote"
//                             onFocus={() => setMatchFocus(true)}
//                             onBlur={() => setMatchFocus(false)}
//                         />
//                         <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                             {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
//                             Must match the first password input field.
//                         </p>

//                         <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
//                     </form>
//                     <p>
//                         Already registered?<br />
//                         <span className="line">
//                             <Link to="/">Sign In</Link>
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//     )
// }

// export default Register

import { useState } from "react";
// import "./Register.css";
import { useForm } from "react-hook-form";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { MdOutlineNavigateNext } from "react-icons/md";

function Register() {
  //error state
  let [error, setError] = useState("");
  let [passError, setPassError] = useState("");
  let [selectedFile, setSelectedFile] = useState(null);

  const validate = (value) => {
    console.log(value);

    // if (validator.isStrongPassword(value, {
    //   minLength: 8, minLowercase: 1,
    //   minUppercase: 1, minNumbers: 1, minSymbols: 1
    // })) {
    //   setErrorMessage('Is Strong Password')
    // } else {
    //   setErrorMessage('Is Not Strong Password')
    // }
  };

  //navigate
  const navigate = useNavigate();

  //use form hook
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //adding new user
  let addNewUser = (newUser) => {
    console.log(newUser);

    // let fd = new FormData();
    // console.log(fd)
    // //append newUser to form data
    // fd.append("user", JSON.stringify(newUser));
    // //append selected file to form data
    // fd.append("userimage", selectedFile);

    // //make HTTP POST req to save newUser to localAPI
    // axios
    //   .post("http://localhost:4000/users-api/register-user", fd)
    //   .then((response) => {
    //     if (response.status === 201) {
    //       //naviagte to login componentxp
    //       navigate("/login");
    //     }
    //     if (response.status !== 201) {
    //       setError(response.data.message);
    //     }
    //   })
    //   .catch((err) => {
    //     //  console.log("err is ",err)
    //     //the client was given an error response (5xx,4xx)
    //     if (err.response) {
    //       setError(err.message);
    //     }
    //     //the client never received a response
    //     else if (err.request) {
    //       setError(err.message);
    //     }
    //     //for other error
    //     else {
    //       setError(err.message);
    //     }
    //   });
  };

//   const onFileSelect = (e) => {
//     console.log(e.target.files[0]);
//     setSelectedFile(e.target.files[0]);
//   };

  return (
    <div>
      <div>
        <section className="vh-100 mb-4 mt-4">
          <div className="container h-100">
            {error.length !== 0 && (
              <p className="text-light text-center">{error}</p>
            )}
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-light bg-dark"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-1">
                          Sign up
                        </p>

                        <form
                          onSubmit={handleSubmit(addNewUser)}
                          className="mx-1 mx-md-4"
                        >
                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <label htmlFor="username">Username</label>
                              <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="e.g. steven"
                                {...register("username", { required: true })}
                              />
                              {errors.username?.type === "required" && (
                                <p className="text-primary fs-6">
                                  *required field
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <label htmlFor="password">Password</label>
                              <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) => validate(e.target.value)}
                                {...register("password", { required: true })}
                              />
                              {errors.password?.type === "required" && (
                                <p className="text-primary fs-6">
                                  *required field
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <label htmlFor="email">Mail</label>
                              <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Your Email"
                                {...register("email", { required: true })}
                              />
                              {errors.email?.type === "required" && (
                                <p className="text-primary fs-6">
                                  *required field
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <label htmlFor="dob">Date of birth</label>
                              <input
                                type="date"
                                id="dob"
                                className="form-control"
                                placeholder="Date of Birth"
                                {...register("dob", { required: true })}
                              />
                              {errors.dob?.type === "required" && (
                                <p className="text-primary fs-6">
                                  *required field
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-lg-2">
                            <button
                              className="btn btn-lg"
                              style={{ backgroundColor: "#AA77FF" }}
                            >
                              Register
                            </button>
                          </div>
                          <div className="sign-up text-light">
                            Already registered?{" "}
                            <Link className="text-decoration-none" to="/login">
                              Login
                            </Link>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex order-1 order-lg-2">
                        <img
                          src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1687098035~exp=1687098635~hmac=3e958d217493bba595e584869d52064a067d8211fe74b50503b2c0571f51b016"
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
    </div>
  );
}

export default Register;