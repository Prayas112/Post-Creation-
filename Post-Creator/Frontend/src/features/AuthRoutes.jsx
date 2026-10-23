import { createBrowserRouter } from "react-router";

import Login from "../features/auth/pages/Login";
import Register from "./auth/pages/Register";
import Feed from "./posts/pages/Feed";
import CreatePost from "./posts/pages/CreatePost";
import ProtectedRoute from "./auth/component/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
    ],
  },
]);
