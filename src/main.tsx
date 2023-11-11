import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import MainLayout from "./Layouts/mainLayout";

document.title = "GanttChat";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
