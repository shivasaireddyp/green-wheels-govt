import { useState } from "react";
// import "./Register.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

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

    let fd = new FormData();
    console.log(fd)
    //append newUser to form data
    fd.append("user", JSON.stringify(newUser));
    //append selected file to form data
    fd.append("userimage", selectedFile);

    //make HTTP POST req to save newUser to localAPI
    axios
      .post("http://localhost:4000/users-api/register-user", fd)
      .then((response) => {
        if (response.status === 201) {
          //naviagte to login componentxp
          navigate("/login");
        }
        if (response.status !== 201) {
          setError(response.data.message);
        }
      })
      .catch((err) => {
        //  console.log("err is ",err)
        //the client was given an error response (5xx,4xx)
        if (err.response) {
          setError(err.message);
        }
        //the client never received a response
        else if (err.request) {
          setError(err.message);
        }
        //for other error
        else {
          setError(err.message);
        }
      });
  };

  const onFileSelect = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

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
                            {/* <i className="fas fa-user fa-lg me-3 fa-fw"></i> */}
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
                            {/* <i className="fas fa-lock fa-lg me-3 fa-fw"></i> */}
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
                            {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
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
                            {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
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

                          <div className="d-flex flex-row align-items-center mb-2">
                            {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <label htmlFor="userimage">
                                Select Profile Picture
                              </label>
                              <input
                                type="file"
                                id="userimage"
                                className="form-control"
                                placeholder="Date of Birth"
                                {...register("userimage")}
                                onInput={onFileSelect}
                              />
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
                              <span>
                                <MdOutlineNavigateNext />{" "}
                              </span>
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