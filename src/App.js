import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Coxsbazzar from "./Components/Coxsbazzar/Coxsbazzar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Sajeck from "./Components/Sajeck/Sajeck";
import SigninLogin from "./Components/SigninLogin/SigninLogin";
import SignupRegister from "./Components/SignupRegister/SignupRegister";
import Sremongol from "./Components/Sremongol/Sremongol";
import Sundorbon from "./Components/Sundorbon/Sundorbon";
import TourList from "./Components/TourList/TourList";
import PrivetRoute from "../src/Rout/Privetroute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/tour",
          element: <TourList></TourList>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/signup",
          element: <SignupRegister></SignupRegister>,
        },
        {
          path: "/signin",
          element: <SigninLogin></SigninLogin>,
        },
        {
          path: "/coxs",
          element: (
            <PrivetRoute>
              <Coxsbazzar></Coxsbazzar>
            </PrivetRoute>
          ),
        },
        {
          path: "/sajeck",
          element: (
            <PrivetRoute>
              <Sajeck></Sajeck>
            </PrivetRoute>
          ),
        },
        {
          path: "/sundorbon",
          element: (
            <PrivetRoute>
              <Sundorbon></Sundorbon>
            </PrivetRoute>
          ),
        },
        {
          path: "/sreemongol",
          element: (
            <PrivetRoute>
              <Sremongol></Sremongol>
            </PrivetRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
