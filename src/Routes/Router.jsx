import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Page/Home";
import Services from "../Page/Services";
import Profile from "../Page/Profile";
import ServiceDetails from "../Page/ServiceDetails";
import DoctorDetails from "../Page/DoctorDetails";
import ErrorPage from "../Page/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Login from "../Page/Login";
import Register from "../Page/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "doctor/:id",
        element: (
          <PrivateRoute>
            <DoctorDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;
