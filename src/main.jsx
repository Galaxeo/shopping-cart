import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ItemPage from "./ItemPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  // consider using context
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop/:id",
    element: <ItemPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
