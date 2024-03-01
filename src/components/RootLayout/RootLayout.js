import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
