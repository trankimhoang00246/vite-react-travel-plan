import { RouteObject } from "react-router-dom";
import LoginAdminPage from "../screens/admin/login";
import LoginUserPage from "../screens/login";
import HomePage from "../screens/home";
import PlacesPage from "../screens/admin/placeManagement";
import NotFoundPage from "../screens/error/notFound";
import DashboardAdminPage from "../screens/admin/dashboard";

const appRoutes: RouteObject[] = [
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginUserPage /> },

  //admin
  { path: "/admin/dashboard", element: <DashboardAdminPage /> },
  { path: "/admin/places", element: <PlacesPage /> },
  { path: "/admin/login", element: <LoginAdminPage /> },
];

export default appRoutes;
