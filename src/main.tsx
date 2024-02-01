import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import NotFound from "./screens/error/NotFound";
import Places from "./screens/admin/placeManagement/Places";
import PlacesDetails from "./screens/admin/placeManagement/PlacesDetails";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
  { path: "/admin/places", element: <Places /> },
  { path: "/admin/places/:id", element: <PlacesDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
