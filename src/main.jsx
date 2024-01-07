import React from "react";
import ReactDOM from "react-dom/client";
0;
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import {  HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
    </HelmetProvider>
  </React.StrictMode>
);
