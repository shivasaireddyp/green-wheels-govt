import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
    },
  ]);

  return (<div className="App">
    <RouterProvider router={routerObj} />
  </div>);
}

export default App;
