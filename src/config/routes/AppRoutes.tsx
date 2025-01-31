import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <h1>Not found</h1>,
  },
  // ...rest paths
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
