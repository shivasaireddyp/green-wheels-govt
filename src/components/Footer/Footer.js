import React from 'react'
import "./Footer.css";
function Footer() {
  return (
    <div>
       <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        {/* <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h1>Website Name</h1>
        <p>Phone No : +91 9392533645</p>

        <p>Copyrights 2024 &copy; Endermen</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/trishank03/">Instagram</a>
        <a href="https://www.youtube.com/channel/UCDLj4FMlae0i_f1Qqh_vClA">Youtube</a>
        <a href="https://www.linkedin.com/in/trishank-t-033718242/">Facebook</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer