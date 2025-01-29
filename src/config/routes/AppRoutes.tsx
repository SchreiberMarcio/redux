import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  // ...rest paths
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
