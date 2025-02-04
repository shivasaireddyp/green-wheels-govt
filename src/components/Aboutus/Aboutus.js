import React from "react";
import "./Aboutus.css";
import "../../images/aboutusimage.jpeg"
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

function Aboutus() {
  return (
    <div data-spy="scroll" data-target=".test-cl">
      <div className="text-light">
        <div className="container py-2">
          <div className="row h-100 align-items-center py-5">
              <h1 className="fw-bold">About us</h1>
            {/* <div className="col-lg-6">
              <p className="leadmb-2 fw-bold">Lyrik Event Management</p>
              <p className="lead">
                Welcome to Lyrik Event Management, where we bring your events to
                life. With a passion for creativity and meticulous attention to
                detail, we specialize in planning and executing memorable
                experiences. From corporate gatherings to weddings and
                celebrations, trust us to handle every aspect of your event,
                ensuring a seamless and unforgettable occasion.
              </p>
              <p className="lead test-cl">
                By{" "}
                <a
                  href="#to-our-team"
                  data-target="#to-our-team"
                  className="text-decoration-none"
                >
                  Team Lyrik
                </a>
              </p>
            </div> */}
            {/* <div className="col-lg-6 d-none d-lg-block">
              <img
                // src="../../images/aboutusimage.jpeg"
                src="https://img.freepik.com/free-vector/business-team-communicating-via-social-media_74855-5439.jpg?size=626&ext=jpg&ga=GA1.1.200008001.1687097961&semt=ais"
                alt=""
                className="img-fluid"
              />
            </div> */}
          </div>
        </div>
      </div>
        {/* <div className="py-1">
          <div className="container text-light py-5">
            <div className="row mb-4">
              <div id="to-our-team" className="col-lg-5">
                <h2 className="fw-bold" id="item1">
                  Our team
                </h2>
              </div>
            </div>

            <div className="row text-center text-light">
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-dark rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Shiva Sai P</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillFacebook />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className=" bg-dark rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Sai Eswar C</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillFacebook />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className=" bg-dark rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Sai Pranay C</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillFacebook />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className=" bg-dark rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Shashank D</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillFacebook />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className=" bg-dark rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Nihal D</h5>
                  <span className="small text-uppercase text-muted">
                    CEO - Founder
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillFacebook />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-link">
                        <AiFillLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
}

export default Aboutus;
