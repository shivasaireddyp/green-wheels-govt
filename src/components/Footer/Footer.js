import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <div style={{ marginTop: "5%" }}>
      <footer className=" text-white bg-dark pt-3 pb-3">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-10 col-lg-7 col-xl-3 mx-auto mt-1">
              <h5>About Us:</h5>
              <p>
                At Green Wheels, we provide structured data and tools to the
                state or central government to improve decision making with
                respect to ecotourism. Contact info:+91 8328552183
              </p>
            </div>
            <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mt-1">
              <h5>Contact us:</h5>
              <div>
                <a href="#">
                  <AiOutlineTwitter />
                  Twitter
                </a>
              </div>
              <div>
                <a href="#">
                  <AiFillInstagram />
                  Instagram
                </a>
              </div>
              <div>
                <a href="#">
                  <AiFillFacebook />
                  Facebook
                </a>
              </div>
              <div>
                <a href="#">
                  <AiFillMail />
                  chola@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
