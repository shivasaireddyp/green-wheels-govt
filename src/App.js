import React from "react";
import Committees from "./components/Committees";
import RootLayout from "./components/RootLayout";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import AudiBooking from "./components/AudiBooking/AudiBooking";
import BookingHistory from "./components/BookingHistory/BookingHistory";
import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Userprofile from "./components/UserProfile/Userprofile";
import Aboutus from "./components/Aboutus/Aboutus";
import { Navigate } from "react-router-dom";
import { loginContext } from "./contexts/loginContext";
import { useContext } from "react";
import Guidelines from "./components/Guidelines/Guidelines";
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
          element: <AudiBooking />,
        },
        {
          path: "/committees",
          element: <Committees />,
        },
        {
          path: "/upcoming-events",
          element: <UpcomingEvents />,
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
          path: "/register-event",
          element: <RegisterEvent />
        },
        {
          path: "/booking-history",
          element: <BookingHistory />
        },
        {
          path: "/event-guidelines",
          element: <Guidelines />
        }
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
