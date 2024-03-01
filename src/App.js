import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout"
import Home from "./components/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    },
  ]);

  return (<div className="App">
    <RouterProvider router={routerObj} />
  </div>);
}

export default App;
