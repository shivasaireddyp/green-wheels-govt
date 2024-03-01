import React from "react";
import Committees from "./components/Committees";
import RootLayout from "./components/RootLayout";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
// import BookingHistory from "./components/BookingHistory/BookingHistory";
// import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import TrendingPlaces from "./components/TrendingPlaces/TrendingPlaces";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Userprofile from "./components/UserProfile/Userprofile";
import Aboutus from "./components/Aboutus/Aboutus";
import { Navigate } from "react-router-dom";
import { loginContext } from "./contexts/loginContext";
import { useContext } from "react";
import AnantagiriHills from "./components/TrendingPlaces/AnantagiriHills/AnantagiriHills";
import KuntalaFalls from "./components/TrendingPlaces/KuntalaFalls/KuntalaFalls";
import Lakshwadeep from "./components/TrendingPlaces/Lakshwadeep/Lakshwadeep";
import Analyse from "./components/Analyse/Analyse";
import "./App.css";
function App() {

  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);

  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/committees",
          element: <Committees />,
        },
        {
          path: "/trending-places",
          element: <TrendingPlaces />,
          children: [
            {
              path: "anantagiri-hills",
              element: <AnantagiriHills />
            },
            {
              path: "kuntala-falls",
              element: <KuntalaFalls />
            },
            {
              path: "lakshwadeep",
              element: <Lakshwadeep />
            }
          ]
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/about-us",
          element: <Aboutus />,
        },
        {
          path: "/user-profile",
          element: <Userprofile />,
        },
        {
          path: "/analyse",
          element: <Analyse />
        },
      ],
    },
  ]);
  return (
    <div className="app-container for-bg">
      <div className="background-image"></div>
      <div className="content">
        <RouterProvider router={routerObj} />
      </div>
    </div>
  );
}

export default App;
