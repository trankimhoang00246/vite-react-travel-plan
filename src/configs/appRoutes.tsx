import { RouteObject } from "react-router-dom";
import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import NotFound from "../screens/error/NotFound";
import Places from "../screens/admin/placeManagement/Places";
import PlacesDetails from "../screens/admin/placeManagement/PlacesDetails";

const appRoutes: RouteObject[] = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/admin/places", element: <Places /> },
  { path: "/admin/places/:id", element: <PlacesDetails /> },
];

export default appRoutes;
