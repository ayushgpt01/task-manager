import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";
import ErrorPage from "./Routes/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Navigate to={"/dashboard"} />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
